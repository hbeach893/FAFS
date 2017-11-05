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
import InventoryPageContainer from './src/InventoryPageContainer';
import UploadPageContainer from './src/UploadPageContainer';

const RouteMapper = (route, navigator) => {
  if (route.name === 'inventory') {
    return <InventoryPageContainer navigator={navigator} />;
  }
  if (route.name === 'upload') {
    return <UploadPageContainer navigator={navigator}/>;
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
