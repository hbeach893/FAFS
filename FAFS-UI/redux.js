import { Platform, Alert } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const API = Platform.OS === 'android'
  ? 'http://10.0.3.2:3000/v1' // works for Genymotion
  : 'http://localhost:3000/v1';

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case 'GET_INVENTORY_DATA':
      // Dispatch GET_INVENTORY_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_INVENTORY_DATA_LOADING', inventoryitems: [], loading: true});
      // Make API call and dispatch appropriate actions when done
      fetch(`${API}/inventoryitems`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_INVENTORY_DATA_RECEIVED',
          data,

        }))
        .catch(error => next({
          type: 'GET_INVENTORY_DATA_ERROR',
          error
        }));
      break;
   
    case 'GET_DRIVER_DATA':
      // Dispatch GET_DRIVER_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_DRIVER_DATA_LOADING', drivers: [], loadingDrivers: true});
      // Make API call and dispatch appropriate actions when done
      fetch(`${API}/driverequests`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_DRIVER_DATA_RECEIVED',
          data,

        }))
        .catch(error => next({
          type: 'GET_DRIVER_DATA_ERROR',
          error
        }));
      break;

    case 'ADD_ITEM':

      const inventoryRequest = new Request(
        `${API}/inventoryitems` ,
           {
             method:'POST',
             body: JSON.stringify(action.newitem),
             headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }}
         )
         fetch(inventoryRequest)
         .then((response)=>{
           if (response.ok){
             return response._bodyInit;
           }
         }).then(() => store.dispatch({type: 'GET_INVENTORY_DATA' }));
      break;

    case 'ADD_DRIVE_REQUEST':
      const driveRequest = new Request(
        `${API}/driverequests` ,
           {
             method:'POST',
             body: JSON.stringify(action.newDriveRequest),
             headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }}
         )
         fetch(driveRequest)
         .then((response)=>{
           if (response.ok){
             return response._bodyInit;
           }
         }).then(() => store.dispatch({type: 'GET_DRIVER_DATA' }));
      break;

    default:
      break;

  }


};

const inventoryStatus = (state = { inventoryitems: [], loading: true}, action) => {
  switch (action.type) {

    case 'GET_INVENTORY_DATA_LOADING':
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case 'GET_INVENTORY_DATA_RECEIVED':
      return {
        loading: false,             // set loading to false
        inventoryitems: action.data.inventoryitems, // update inventoryitems array with reponse data
      };
    case 'GET_INVENTORY_DATA_ERROR':
      return state;
    default:
      return state;
    }
};


const driverStatus = (state = { drivers: [], loadingDrivers: true}, action) => {
  switch (action.type) {

    case 'GET_DRIVER_DATA_LOADING':

      return {
        ...state,                   // keep the existing state,
        loadingDrivers: true,              // but change loading to true
      };
    case 'GET_DRIVER_DATA_RECEIVED':
      return {
        loadingDrivers: false,             // set loading to false
        drivers: action.data.driverequests, // update drivers array with reponse data
      };
    case 'GET_DRIVER_DATA_ERROR':
      return state;
    default:
      return state;
    }
};

const filterInventory = (state = { inventoryitems: [], filteredItems: [], filterKey: '', sortKey: ''}, action) => {
  switch(action.type) {
    case 'FILTER_BY_FILTER_KEY':
      var filteredInventoryItems = filterByKey(action.inventoryitems, action.filterKey);
      var sortedInventoryItems = sortByKey(filteredInventoryItems, state.sortKey);
      return {
        ...state,
        filterKey: action.filterKey,
        filteredItems: sortedInventoryItems,
      }
    case 'SORT_BY_SORT_KEY':
      var sortedInventoryItems = sortByKey(action.inventoryitems, action.sortKey);
      var filteredInventoryItems = filterByKey(sortedInventoryItems, state.filterKey);
      return {
        ...state,
        sortKey: action.sortKey,
        filteredItems: filteredInventoryItems,
      }
    default:
      return state 
  } 
}

const compareNameAtoZ = (a,b) => {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

const compareNameZtoA = (a,b) => {
  if (a.title > b.title)
    return -1;
  if (a.title < b.title)
    return 1;
  return 0;
}

const comparePriceLoToHi= (a,b) => {
  var a = a.price.replace("$", "");
  var b = b.price.replace("$", "");
  a = parseFloat(a);
  b = parseFloat(b);
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

const comparePriceHiToLo= (a,b) => {
  var a = a.price.replace("$", "");
  var b = b.price.replace("$", "");
  a = parseFloat(a);
  b = parseFloat(b);
  if (a > b)
    return -1;
  if (a < b)
    return 1;
  return 0;
}

const sortByKey = (myArray, sortKey) => {
  if (sortKey == 'A-Z') {
    return myArray.slice().sort(compareNameAtoZ);
  } 
  if (sortKey == 'Z-A') {
    return myArray.slice().sort(compareNameZtoA);
  } 
  if (sortKey == 'Price: Low to High') {
    return myArray.slice().sort(comparePriceLoToHi);
  } 
  if (sortKey == 'Price: High to Low') {
    return myArray.slice().sort(comparePriceHiToLo);
  } 
  else {
    return myArray.slice();
  }
}

const filterByKey = (myArray, filterKey) => {
  if (filterKey == 'All') {
    return myArray.slice();
  }
  else if (filterKey != "") {
    let filteredWords = myArray.slice().filter(item => item.type.indexOf(filterKey) != -1);
    return filteredWords; 
  }
  else {
    return myArray.slice();
  }
}

export const reducers = combineReducers({
  inventoryStatus,
  filterInventory,
  driverStatus,
  form
});
