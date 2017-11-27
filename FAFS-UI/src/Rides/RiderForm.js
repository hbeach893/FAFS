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
    errors.email = 'Email is required.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }
  return errors
}

function MyForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Starting location</Text>
      <Field
        name={'start'}
        component={MyTextInput}
        placeholder={'Preferred starting location of ride'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Destination</Text>
      <Field
        name={'dest'}
        component={MyTextInput}
        placeholder={'Preferred destination of ride'}
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
        placeholder={'Preferred departure time'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Seats needed</Text>
      <Field
        name={'seats'}
        component={MyTextInput}
        placeholder={'Number of desired seats'}
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
})(MyForm);


const styles = StyleSheet.create({
  container: {
    padding: 45
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
