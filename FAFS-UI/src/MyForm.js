import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

import MyTextInput from './MyTextInput';

/**
 * Automatically adds the dashes required by the specified phone format and limits the input to ten characters
 */
const phoneFormatter = (number) => {
  if (!number) return '';
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.substring(0, 10);
  return number.substring(0, 7).match(splitter).join('-') + number.substring(7);
};

// remove dashes added by the formatter
const phoneParser = (number) => number ? number.replace(/-/g, '') : '';

/**
 * Force after min date
 */
const maxDateNormalize = (value, previousValue, values) => {
  const momentMinDate = moment(values.minDate, 'MM-DD-YYYY', true);
  const momentMaxDate = moment(value, 'MM-DD-YYYY', true);
  if (!momentMinDate.isValid() || !momentMaxDate.isValid()) {
    return value;
  }
  if (!momentMaxDate.isAfter(momentMinDate)) {
    return momentMinDate.add(1, 'd').format('MM-DD-YYYY');
  }
  return value;
};

/**
 * Force before max date
 */
const minDateNormalize = (value, previousValue, values) => {
  const momentMaxDate = moment(values.maxDate, 'MM-DD-YYYY', true);
  const momentMinDate = moment(value, 'MM-DD-YYYY', true);
  if (!momentMinDate.isValid() || !momentMaxDate.isValid()) {
    return value;
  }
  if (!momentMinDate.isBefore(momentMaxDate)) {
    return momentMaxDate.subtract(1, 'd').format('MM-DD-YYYY');
  }
  return value;
};

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
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Your Email</Text>
      <Field
        name={'email'}
        component={MyTextInput}
        placeholder={'Your email'}
      />
      {
        /*
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Min date</Text>
        <Field
          name={'minDate'}
          component={MyTextInput}
          placeholder={'MM-DD-YYYY'}
          normalize={minDateNormalize}
        />
        */
      }

      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default reduxForm({
  form: 'uploadItem'
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
