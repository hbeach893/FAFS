import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';


export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigator.push({name: 'inventory'})}
          title="View Inventory"
          color="#841584"
          accessibilityLabel="Upload an item"
        />
        <Button onPress={() => this.props.navigator.push({name: 'ride_requests'})}
          title="View Rideshares"
          color="#841584"
          accessibilityLabel="View Rideshare Page"
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
