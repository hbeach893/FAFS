import React, { Component } from 'react';
import RideRequests from './RideRequests';
import RideNavBar from './RideNavBar';


import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import { connect } from 'react-redux';



export default class RideRequestsContainer extends Component {
  render() {
    const { sort } = this.props;
    return (
      <View style={styles.container}>
        <RideNavBar navigator={this.props.navigator}/>
        <Button onPress={() => this.props.navigator.push({name: 'drive_requests'})}
          title="View Drives"
          color="#841584"
          accessibilityLabel="View the Inventory"
        />
        <RideRequests/>


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
