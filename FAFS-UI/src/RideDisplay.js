import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class RideDisplay extends Component {
  render() {
    const { item, item: { start, dest, date, time, numSeats, riderEmail, price }, onOpen } = this.props;
    var dateArray = date.split('-');
    var year = dateArray[0];
    var month = dateArray[1];
    var day = dateArray[2];
    newDate = month + "/" + day + "/" + year
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title} numberOfLines={1}>{start} to {dest} - {price}</Text>
        <Text style={styles.details} numberOfLines={1}>{newDate} || {time} || {numSeats} seats </Text>
        <Text style={styles.details} numberOfLines={1}>{riderEmail}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 30,
    //height: (height - 600),
    width: width,

  },
  imageContainer: {
    flex: 1,
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  details: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});
