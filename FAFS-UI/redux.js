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
          sortKey: 'A_TO_Z',
          data,

        }))
        .catch(error => next({
          type: 'GET_INVENTORY_DATA_ERROR',
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;

    case 'ADD_ITEM':

      const request = new Request(
        `${API}/inventoryitems` ,
           {
             method:'POST',
             body: JSON.stringify(action.newitem),
             headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }}
         )
         fetch(request)
         .then((response)=>{
           if (response.ok){
             return response._bodyInit;
           }
         }).then(() => store.dispatch({type: 'GET_INVENTORY_DATA', sortKey: 'A_TO_Z'}));
  }
};

const inventoryStatus = (state = { inventoryitems: [], loading: true, sortKey: 'A_TO_Z' }, action) => {
  switch (action.type) {

    case 'GET_INVENTORY_DATA_LOADING':
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case 'GET_INVENTORY_DATA_RECEIVED':
      var sortedInventoryItems = sortByKey(action.data.inventoryitems, 'A_TO_Zsd');
      return {
        loading: false,             // set loading to false
        inventoryitems: sortedInventoryItems, // update inventoryitems array with reponse data
      };
    case 'SORT_BY_SORT_KEY':
      var sortedInventoryItems = sortByKey(action.inventoryitems, action.sortKey);
      return {
        ...state,
        inventoryitems: sortedInventoryItems,
      }
    case 'GET_INVENTORY_DATA_ERROR':
      return state;
    default:
      return state;
    }
};



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
  if (sortKey == 'A_TO_Z') {
    return myArray.slice().sort(compareNameAtoZ);
  } 
  if (sortKey == 'Z_TO_A') {
    return myArray.slice().sort(compareNameZtoA);
  } 
  if (sortKey == 'LO_TO_HI') {
    return myArray.slice().sort(comparePriceLoToHi);
  } 
  if (sortKey == 'HI_TO_LO') {
    return myArray.slice().sort(comparePriceHiToLo);
  } 
  else {
    return myArray.slice();
  }
}

export const reducers = combineReducers({
  inventoryStatus
});
