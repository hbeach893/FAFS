import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducers } from './redux';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import {
  Alert
} from 'react-native';
//import StartupPageContainer from './src/StartupPageContainer';

import InventoryPageContainer from './src/InventoryPageContainer';
import UploadPageContainer from './src/UploadPageContainer';

import RideRequestsContainer from './src/RideRequestsContainer';
import UploadDriverContainer from './src/UploadDriverContainer';
//import DriveRequestsContainer from './src/DriveRequestsContainer';

const RouteMapper = (route, navigator) => {

  if (route.name === 'inventory') {
    return <InventoryPageContainer navigator={navigator} />;
  }
  if (route.name === 'upload') {
    return <UploadPageContainer navigator={navigator}/>;
  }
  if (route.name === 'ride_requests') {
    return <RideRequestsContainer navigator={navigator} />;
  }
  if (route.name === 'upload_ride_driver') {
    return <UploadDriverContainer navigator={navigator} />;
  }
};

// Create Redux store
export const store = createStore(reducers, {}, applyMiddleware(apiMiddleware));

store.dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true});
store.dispatch({type: 'GET_DRIVER_DATA', drivers: [], loadingDrivers: true});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          // Default to inventory route
          initialRoute={{ name: 'inventory' }}
          // Use FloatFromBottom transition between screens
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          // Pass a route mapper functions
          renderScene={RouteMapper}
        />
      </Provider>
    );
  }
}
