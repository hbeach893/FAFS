import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

@connect(
  state => ({
  }),
  dispatch => ({
    refreshInventory: () => dispatch({type: 'CLEAR_INVENTORY_FILTERS'}),
    refreshRides: () => dispatch({type: 'CLEAR_RIDE_FILTERS'})
  }),
)

export default class NavBar extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Button large
          color = "purple"
          onPress={() => {this.props.navigator.push({name: 'inventory'}); this.props.refreshInventory()}}
          title="INVENTORY"
          accessibilityLabel="Upload an item"
        />
        <Button onPress={() => {this.props.navigator.push({name: 'ride_requests'}); this.props.refreshRides()}}
          title="RIDES"
          accessibilityLabel="View Rideshare Page"
        />
      </View>

    )
  }
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    //height: '5%',
   },
});
