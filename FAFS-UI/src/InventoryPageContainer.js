import React, { Component } from 'react';
import Inventory from './Inventory';
import NavBar from './NavBar';
import FilterInventory from './FilterInventory';

import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import { connect } from 'react-redux';



export default class InventoryPageContainer extends Component {
  render() {
    const { sort } = this.props;
    return (
      <View style={styles.container}>
        <NavBar navigator={this.props.navigator}/>
        <FilterInventory/>
        <Inventory/>
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
