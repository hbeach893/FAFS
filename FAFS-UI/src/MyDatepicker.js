import React, {Component} from 'react';
import { TextInput, View, Text, StyleSheet, Alert } from 'react-native';

import DatePicker from 'react-native-datepicker';

export default class MyDatepicker extends Component {
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

		const { input, meta } = this.props;
		const validationStyles = meta.touched && !meta.active
		? meta.valid ? styles.valid : styles.invalid
		: null;
		return(
			<View>
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
	            onDateChange={(date) => {this.setState({date: date}); input.onChange(date)}}
	          />
	          { meta.touched && meta.error && <Text>{ meta.error }</Text> }
			</View>
			)
	}
}

MyDatepicker.propTypes = {
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

const styles = StyleSheet.create({
	time: {
		width: '100%',
		marginTop: 10,
	}
});