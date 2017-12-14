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
      <View style={styles.container}>
        <Text style={styles.header}>Middlebury's Free and For Sale</Text>
        <View style = {styles.buttonsContainer}>
          <Button large
            color = "white"
            fontWeight = "bold"
            onPress={() => {this.props.navigator.push({name: 'inventory'}); this.props.refreshInventory()}}
            title="INVENTORY"
            accessibilityLabel="Upload an item"
          />
          <Button onPress={() => {this.props.navigator.push({name: 'rides'}); this.props.refreshRides()}}
            color="white"
            title="RIDES"
            accessibilityLabel="View Rideshare Page"
          />
          <Button onPress={() => {this.props.navigator.push({name: 'upload_page'}); this.props.refreshRides()}}
            color="white"
            title="UPLOAD"
            accessibilityLabel="View Rideshare Page"
          />
        </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    color: 'navy',
    fontSize: 20,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'navy',
    //height: '10%',
   },
});
