import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

import MyTextInput from './MyTextInput';

const validate = values => {
  const errors = {}
  if(!values.itemName) {
    errors.itemName = 'Item name is required.'
  }
  if(!values.itemDescription) {
    errors.itemDescription = 'Item description is required.'
  }
  if(!values.itemPrice) {
    errors.itemPrice = 'Item price is required.'
  } else if (!/^[1-9]\d*(?:\.\d{0,2})?$/i.test(values.itemPrice)) {
    errors.itemPrice = 'Item price must be a valid currency.' }
  if(!values.itemImage) {
    errors.itemImage = 'Item image is required.'
  }
  if(!values.email) {
    errors.email = 'Email is required.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

function MyForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Starting location</Text>
      <Field
        name={'Starting location'}
        component={MyTextInput}
        placeholder={'Preferred starting location of ride'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Destination</Text>
      <Field
        name={'Destination'}
        component={MyTextInput}
        placeholder={'Preferred destination of ride'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Departure time</Text>
      <Field
        name={'Time of departure'}
        component={MyTextInput}
        placeholder={'Preferred departure time'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Seats needed</Text>
      <Field
        name={'seats needes'}
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
  //validate
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
    padding: 5
  }
});
