import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
import TimePicker from 'react-native-simple-time-picker';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default class MyTimepicker extends Component {
  state = {
    selectedHours: 0,
    selectedMinutes: 0,
  }
 
  render() {
    const { input, meta } = this.props;
    const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;
    const { selectedHours, selectedMinutes } = this.state;
    return (
      <View style={styles.container}>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => {this.setState({ selectedHours: hours, selectedMinutes: minutes }); 
          var time = hours.toString() + ":" + minutes.toString();
          input.onChange(time)}}
        />
      </View>
    );
  }
}

MyTimepicker.propTypes = {
  input: React.PropTypes.shape({
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.any.isRequired
  }).isRequired,
  meta: React.PropTypes.shape({
    active: React.PropTypes.bool.isRequired,
    error: React.PropTypes.string,
    invalid: React.PropTypes.bool.isRequired,
    pristine: React.PropTypes.bool.isRequired,
    visited: React.PropTypes.bool.isRequired
  }).isRequired}