import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import NavBar from './NavBar';

export default class UploadPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				 <NavBar navigator={this.props.navigator}/>
				 	<View style={styles.buttons}>
						<Button onPress={() => this.props.navigator.push({name: 'upload_inventory'})}
							color="navy"
							title="Upload an Item"
							accessibilityLabel="View Rideshare Page"
						/>
						<Button onPress={() => {this.props.navigator.push({name: 'upload_ride'})}}
						    color="navy"
						    title="Upload a Ride"
						    accessibilityLabel="View Rideshare Page"
						/>
					</View>
			</View>
			)
	}
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    paddingTop: 30,         // start below status bar
  },

  buttons: {
  	paddingTop: 20,
  }

});