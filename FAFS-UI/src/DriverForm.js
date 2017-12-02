import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

import MyTextInput from './MyTextInput';

const validate = values => {
  const errors = {}
  if(!values.start) {
    errors.start = 'Starting location is required.'
  }
  if(!values.dest) {
    errors.dest = 'Destination is required.'
  }
  if(!values.price) {
    errors.price = 'Price is required.'
  } else if (!/^[1-9]\d*(?:\.\d{0,2})?$/i.test(values.price) && (values.price != '0')) {
    errors.price = 'Item price must be a valid currency. If free, please put 0.' }
  if(!values.date) {
    errors.date = 'Departure date is required.'
  }
  if(!values.time) {
    errors.time = 'Departure time is required.'
  }
  if(!values.seats) {
    errors.seats = 'Seat number is required.'
  } else if (isNaN(Number(values.seats))) {
    errors.seats = 'Seat number must be a valid number.'
  }
  if(!values.email) {
    errors.email = 'Middlebury email is required.'
  } else if (!/^[A-Z0-9._%+-]+@middlebury.edu/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }
  return errors
}

function DriverForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Starting location</Text>
      <Field
        name={'start'}
        component={MyTextInput}
        placeholder={'Starting location of ride'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Destination</Text>
      <Field
        name={'dest'}
        component={MyTextInput}
        placeholder={'Ride destination'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Departure date (mm/dd/yy)</Text>
      <Field
        name={'date'}
        component={MyTextInput}
        placeholder={'Preferred departure date'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Departure time</Text>
      <Field
        name={'time'}
        component={MyTextInput}
        placeholder={'Departure time'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Available seats</Text>
      <Field
        name={'seats'}
        component={MyTextInput}
        placeholder={'Number of available seats'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Price per seat</Text>
      <Field
        name={'price'}
        component={MyTextInput}
        placeholder={'Requested price per seat'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Your Email</Text>
      <Field
        name={'email'}
        component={MyTextInput}
        placeholder={'Your email'}
      />

      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default reduxForm({
  form: 'uploadItem',
  validate
})(DriverForm);


const styles = StyleSheet.create({
  container: {
    padding: 45,
    flex: 1
  },
  formSubmit: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5,
    paddingBottom: 100,
  }
});
