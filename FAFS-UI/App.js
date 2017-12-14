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
import UploadInventoryContainer from './src/UploadInventoryContainer';
import RidePageContainer from './src/RidePageContainer';
import UploadRideContainer from './src/UploadRideContainer';
import UploadPage from './src/UploadPage';


{/*
  A few parts of this project have been built from the help of a 3 part tutorial on rational app dev
  - rationalappdev.com/movie-tickets-booking-app-with-react-native/
  - rationalappdev.com/storing-data-from-api-with-redux-in-react-native-apps/
  - rationalappdev.com/api-backend-with-nodejs-express-and-mongodb-for-react-native-apps/

*/}



const RouteMapper = (route, navigator) => {

  if (route.name === 'inventory') {
    return <InventoryPageContainer navigator={navigator} />;
  }
  if (route.name === 'upload_inventory') {
    return <UploadInventoryContainer navigator={navigator}/>;
  }
  if (route.name === 'rides') {
    return <RidePageContainer navigator={navigator} />;
  }
  if (route.name === 'upload_ride') {
    return <UploadRideContainer navigator={navigator} />;
  }
  if (route.name === 'upload_page') {
    return <UploadPage navigator={navigator}/>
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
