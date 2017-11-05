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
          data
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
         })
  }
};

const inventoryStatus = (state = { inventoryitems: [], loading: true }, action) => {
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



export const reducers = combineReducers({
  inventoryStatus,
  form
});
