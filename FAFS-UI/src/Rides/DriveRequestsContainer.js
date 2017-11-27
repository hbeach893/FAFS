import React, { Component } from 'react';
import DriveRequests from './DriveRequests';
import RideNavBar from './RideNavBar';


import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import { connect } from 'react-redux';



export default class DriveRequestsContainer extends Component {
  render() {
    const { sort } = this.props;
    return (
      <View style={styles.container}>
        <RideNavBar navigator={this.props.navigator}/>
        <Button onPress={() => this.props.navigator.pop()}
          title="View Rides"
          color="#841584"
          accessibilityLabel="View the Inventory"
        />
        <DriveRequests/>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,         // start below status bar
  },
});