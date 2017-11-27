import React, { Component } from 'react';
import MyForm from './RiderForm';
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
    addRideRequest: (rideObj) => dispatch({type: 'ADD_RIDE_REQUEST', newRideRequest: rideObj}),
  }),
)


export default class UploadRiderContainer extends Component {
  render() {

    const addRideRequest = (ride) => {
      const rideObj = {}
      rideObj.start = ride.start;
      rideObj.dest = ride.dest;
      rideObj.date = ride.date;
      rideObj.time = ride.time;
      rideObj.numSeats = ride.seats;
      rideObj.riderEmail = ride.email;
      rideObj.datePosted = new Date();
      this.props.addRideRequest(rideObj);
  }
   
    return (
      <View style={styles.container}>
        <Button onPress={() => {this.props.navigator.pop()}}
          title="Back to Available Rides"
          color="#841584"
          accessibilityLabel="Upload a ride request"
        />
        <MyForm onSubmit={(rideRequest) => { addRideRequest(rideRequest); Alert.alert("Your request was submitted!"); this.props.navigator.pop()} }/>
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
