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
      <View style = {styles.container}>
        <Button large
          color = "purple"
          onPress={() => this.props.navigator.push({name: 'inventory'})}
          title="INVENTORY"
          accessibilityLabel="Upload an item"
        />
        <Button onPress={() => this.props.navigator.push({name: 'ride_requests'})}
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
