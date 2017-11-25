import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';


export default class RideNavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigator.push({name: 'upload_ride_rider'})}
          title="Upload New Ride (Rider)"
          color="#841584"
          accessibilityLabel="Upload a Ride"
        />
        <Button onPress={() => this.props.navigator.push({name: 'upload_ride_driver'})}
          title="Upload New Ride (Driver)"
          color="#841584"
          accessibilityLabel="Upload a Ride"
        />
        <Button onPress={() => this.props.navigator.push({name: 'startup'})}
          title="Return to Main"
          color="#841584"
          accessibilityLabel="View the Inventory"
        />
      </View>

    )
  }
};


const styles = StyleSheet.create({
  // container: {
  //   height: 30,
  // },
});
