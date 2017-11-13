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
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Name of Item</Text>
      <Field
        name={'itemName'}
        component={MyTextInput}
        placeholder={'Name of item'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Description of Item</Text>
      <Field
        name={'itemDescription'}
        component={MyTextInput}
        placeholder={'Description of item'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Price of Item</Text>
      <Field
        name={'itemPrice'}
        component={MyTextInput}
        placeholder={'Price of item'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Image of Item</Text>
      <Field
        name={'itemImage'}
        component={MyTextInput}
        placeholder={'Image URL'}
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
    padding: 5
  }
});
