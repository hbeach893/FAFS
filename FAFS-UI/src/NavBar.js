import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';


export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigator.push({name: 'upload'})}
          title="Upload Item"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

    )
  }
};


const styles = StyleSheet.create({
  container: {
    height: 50,
  },
});
