import React, { Component } from 'react';
import DriverForm from './DriverForm';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert
} from 'react-native';

@connect(
  state => ({

  }),
  dispatch => ({
    addDriveRequest: (driveObj) => dispatch({type: 'ADD_DRIVE_REQUEST', newDriveRequest: driveObj}),
  }),
)


export default class UploadDriverContainer extends Component {
  render() {

  const addDriveRequest = (drive) => {
    const driveObj = {}
    driveObj.start = drive.start;
    driveObj.dest = drive.dest;
    driveObj.price = drive.price;
    driveObj.date = drive.date;
    driveObj.time = drive.time;
    driveObj.numSeats = drive.seats;
    driveObj.riderEmail = drive.email;
    driveObj.datePosted = new Date();
    this.props.addDriveRequest(driveObj);
    if (driveObj.dest.length > 0) {
        this.props.addDriveRequest(driveObj);
      }  
  }
    return (
      <View style={styles.container}>
        <Button onPress={() => {this.props.navigator.pop()}}
          title="Back to Available Rides"
          color="#841584"
          accessibilityLabel="Upload a drive request"
        />
        <DriverForm onSubmit={(driveRequest) =>  {addDriveRequest(driveRequest); Alert.alert("Your request was submitted!"); this.props.navigator.pop();}}/>
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
