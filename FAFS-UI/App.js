import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';
import Inventory from './src/Inventory';

const RouteMapper = (route, navigator) => {
  if (route.name === 'inventory') {
    return <Inventory navigator={navigator} />;
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        // Default to movies route
        initialRoute={{ name: 'inventory' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}
