import React, { Component } from 'react';
import Rides from './Rides';
import NavBar from './NavBar';
import FilterRides from './FilterRides';

import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import { connect } from 'react-redux';



export default class RidePageContainer extends Component {
  render() {
    const { sort } = this.props;
    return (
      <View style={styles.container}>
        <NavBar navigator={this.props.navigator}/>
        <FilterRides/>
        <Rides/>


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
