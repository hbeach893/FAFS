import React, { Component } from 'react';
import Inventory from './Inventory';
import NavBar from './NavBar';
import MyForm from './MyForm';
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


export default class UploadPageContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigator.pop()}
          title="Back to Main"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <MyForm onSubmit={(values) => Alert.alert('Submitted!', JSON.stringify(values))}/>
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
