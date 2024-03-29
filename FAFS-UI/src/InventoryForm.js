import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import moment from 'moment';

import MyDropdown from './MyDropdown';

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
    errors.email = 'Middlebury email is required.'
  } else if (!/^[A-Z0-9._%+-]+@middlebury.edu/i.test(values.email)) {
    errors.email = 'Middlebury email is required.'
  }
  if(values.type == 'Select' || values.type == undefined) {
    errors.type = 'Type of Item is Required'
  }
  return errors
}

function InventoryForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20}}>Item Form</Text>
      <Text style={{ fontWeight: 'bold'}}>Name of Item</Text>
      <Field
        name={'itemName'}
        component={MyTextInput}
        placeholder={'Name of item'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Description of item</Text>
      <Field
        name={'itemDescription'}
        component={MyTextInput}
        placeholder={'Description of item'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Price of item (USD)</Text>
      <Field
        name={'itemPrice'}
        component={MyTextInput}
        placeholder={'Price of item'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Image of item</Text>
      <Field
        name={'itemImage'}
        component={MyTextInput}
        placeholder={'Image URL'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Your email</Text>
      <Field
        name={'email'}
        component={MyTextInput}
        placeholder={'Your email'}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Type of item</Text>
      <Field
        name={'type'}
        component={MyDropdown}
        placeholder={'Type of item'}
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
})(InventoryForm);


const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  formSubmit: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5,
    paddingBottom: 100,
  },
  dropdownDefaultText: {
    fontSize: 18,
    textAlign: 'center'
  },
  dropdownText: {
    fontSize: 16,
    textAlign: 'center'
  }
});
