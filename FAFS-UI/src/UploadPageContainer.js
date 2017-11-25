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
import {store} from '../App.js';

const addItem = (item) => {
  const itemObj = {}
  itemObj.title = item.itemName;
  itemObj.desc = item.itemDescription;
  itemObj.image = item.itemImage;
  itemObj.price = item.itemPrice;
  itemObj.ownerEmail = item.email;
  itemObj.datePosted = new Date();
  itemObj.type = [item.type];
  store.dispatch({type:'ADD_ITEM', newitem: itemObj});

}

export default class UploadPageContainer extends Component {
  render() {
    const { refresh } = this.props;
    return (
      <View style={styles.container}>
        <Button onPress={() => {this.props.navigator.pop()}}
          title="Back to Main"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <MyForm onSubmit={(item) =>  addItem(item)}/>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
    flex: 1
  },
});
