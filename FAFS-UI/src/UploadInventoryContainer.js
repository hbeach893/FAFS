import React, { Component } from 'react';
import Inventory from './Inventory';
import NavBar from './NavBar';
import InventoryForm from './InventoryForm';
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
  }),
  dispatch => ({
    addItem: (itemObj) => dispatch({type: 'ADD_ITEM', newitem: itemObj}),
  }),
)

export default class UploadPageContainer extends Component {
  render() {
    const { refresh } = this.props;

    const addItem = (item) => {
      const itemObj = {}
      var priceNum = item.itemPrice.replace("$", "");
      itemObj.title = item.itemName;
      itemObj.desc = item.itemDescription;
      itemObj.image = item.itemImage;
      itemObj.price = "$" + priceNum;
      itemObj.ownerEmail = item.email;
      itemObj.datePosted = new Date();
      itemObj.type = [item.type];
      this.props.addItem(itemObj);
    }
    
    return (
      <View style={styles.container}>
        <NavBar navigator={this.props.navigator}/>
        <InventoryForm onSubmit={(item) =>  { addItem(item); Alert.alert("Your request was submitted!"); this.props.navigator.pop()}}/>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    paddingTop:30,         // start below status bar
    flex: 1
  },
});
