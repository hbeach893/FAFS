import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Button, 
  Text
} from 'react-native';
import { connect } from 'react-redux';

import DatePicker from 'react-native-datepicker';

@connect(
  state => ({
    drivers: state.driverStatus.drivers
  }),
  dispatch => ({
    search: (drivers, origin, destination, date) => dispatch({type: 'SEARCH_RIDES', drivers:drivers, origin: origin, destination: destination, date:date})
  }),
)


export default class FilterRides extends Component {
  constructor(props) {
    super(props);
    this.state = {origin: '', destination: '', date: ''};

  }
  render(){
    var date = new Date();
    var currentDate = date.getDate().toString();
    var currentMonthNum = date.getMonth() + 1;
    var currentMonth = currentMonthNum.toString();
    var currentYearNum = date.getYear() % 100;
    var currentYear = "20" + currentYearNum.toString();
    var maxYearNum = currentYearNum + 2;
    var maxYear = "20" + maxYearNum.toString();
    var minDate = currentYear + "-" + currentMonth + "-" + currentDate;
    var maxDate = maxYear + "-" + currentMonth + "-" + currentDate;
    return (
      <View style = {styles.container}>
        <View style = {styles.searchContainer}>
          <TextInput
            style={styles.loc}
            placeholder="Where from?"
            onChangeText={(origin) => this.setState({origin})}
          />
          <Text style={styles.label}>to</Text>
          <TextInput
            style={styles.loc}
            placeholder="Where to?"
            onChangeText={(destination) => this.setState({destination})}
          />
        </View>
        <View style={styles.timesContainer}>      
          <DatePicker
            style={styles.time}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate= {minDate}
            maxDate= {maxYear}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys. 
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          />
          <View style={{marginTop: 10}}>
          <Button
            style = {styles.searchButton}
            onPress={() => this.props.search(this.props.drivers, this.state.origin, this.state.destination, this.state.date)}
            title="Search"
            color="navy"
            accessibilityLabel="Search"
          />
          </View>
        </View>
    </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  searchContainer: {
    height: 50,
    paddingTop:5,
    flexDirection: 'row',
  },
  timesContainer: {
    height: 50,
    flexDirection: 'row',
  },
  search: {
    height: 50,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: '75%'
  },
  loc: {
    height: 50,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: '40%'
  },
  label: {
    height: 50,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: '20%'
  },
  time: {
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    width: '75%'
  },
    searchButton: {
    width: '25%',
    marginTop: 50,
  }
})
  