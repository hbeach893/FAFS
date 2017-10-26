import React, { Component } from 'react';
import Inventory from './Inventory';
import NavBar from './NavBar';
import MyForm from './MyForm';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Button,
  FormLabel,
  FormInput,
  Alert,
  FormValidationMessage
} from 'react-native';

@connect(
  state => ({
    inventoryitems: state.inventoryStatus.inventoryitems,
    loading: state.inventoryStatus.loading,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true}),
  }),
)

export default class UploadPageContainer extends Component {
  render() {
    const { inventoryitems, loading, refresh } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigator.pop()}
          title="Back to Main"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <MyForm onSubmit={(values) => refresh}/>
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
