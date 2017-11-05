import React, { Component } from 'react';
import Inventory from './Inventory';
import NavBar from './NavBar';
import {
  View,
  StyleSheet
} from 'react-native';


export default class InventoryPageContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar navigator={this.props.navigator}/>
        <Inventory/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,         // start below status bar
  },
});
