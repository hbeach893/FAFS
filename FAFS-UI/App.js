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
import StartupPageContainer from './src/StartupPageContainer';

import InventoryPageContainer from './src/Inventory/InventoryPageContainer';
import UploadPageContainer from './src/Inventory/UploadPageContainer';

import RidesharePageContainer from './src/Rides/RidesharePageContainer';
import UploadRiderContainer from './src/Rides/UploadRiderContainer';
import UploadDriverContainer from './src/Rides/UploadDriverContainer';


const RouteMapper = (route, navigator) => {
  if (route.name === 'startup') {
    return <StartupPageContainer navigator={navigator} />;
  }
  if (route.name === 'inventory') {
    return <InventoryPageContainer navigator={navigator} />;
  }
  if (route.name === 'upload') {
    return <UploadPageContainer navigator={navigator}/>;
  }
  if (route.name === 'ride_inventory') {
    return <RidesharePageContainer navigator={navigator} />;
  }
  if (route.name === 'upload_ride_rider') {
    return <UploadRiderContainer navigator={navigator} />;
  }
  if (route.name === 'upload_ride_driver') {
    return <UploadDriverContainer navigator={navigator} />;
  }
};

// Create Redux store
export const store = createStore(reducers, {}, applyMiddleware(apiMiddleware));


store.dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true});


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          // Default to inventory route
          initialRoute={{ name: 'startup' }}
          // Use FloatFromBottom transition between screens
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          // Pass a route mapper functions
          renderScene={RouteMapper}
        />
      </Provider>
    );
  }
}
