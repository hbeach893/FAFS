import React, { Component } from 'react';
import RideForm from './RideForm';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert
} from 'react-native';
import NavBar from './NavBar';
@connect(
  state => ({

  }),
  dispatch => ({
    addDriveRequestRedux: (driveObj) => dispatch({type: 'ADD_DRIVE_REQUEST', newDriveRequest: driveObj}),
  }),
)


export default class UploadRideContainer extends Component {
  render() {

  const addDriveRequest = (drive) => {
    const driveObj = {};
    var priceNum = drive.price.replace("$", "");
    var timeArray = drive.time.split(':');
    var hours = timeArray[0];
    var minutes = timeArray[1];
    var minutes = minutes.length > 1 ? minutes : "0" + minutes;
    var time = hours + ":" + minutes;
    driveObj.start = drive.start;
    driveObj.dest = drive.dest;
    driveObj.price = "$" + priceNum;
    driveObj.date = drive.date;
    driveObj.time = time;
    driveObj.numSeats = drive.seats;
    driveObj.riderEmail = drive.email;
    driveObj.datePosted = new Date();
    if (driveObj.dest.length > 0) {
        this.props.addDriveRequestRedux(driveObj);
      }  
  }
    return (
      <View style={styles.container}>
         <NavBar navigator={this.props.navigator}/>
        <RideForm onSubmit={(driveRequest) =>  {addDriveRequest(driveRequest); Alert.alert("Your request was submitted!"); this.props.navigator.pop();}}/>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,         // start below status bar
  },
});
