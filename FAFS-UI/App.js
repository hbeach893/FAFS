import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, reducer } from './redux';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import Inventory from './src/Inventory';

const RouteMapper = (route, navigator) => {
  if (route.name === 'inventory') {
    return <Inventory navigator={navigator} />;
  }
};

// Create Redux store
const store = createStore(reducer, {}, applyMiddleware(apiMiddleware));

// Fetch inventory data
store.dispatch({type: 'GET_INVENTORY_DATA'});

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
