import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


export default function MyDropdown(props) {
	const { input, meta } = props;
	 const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;

	return(
		<View style={[styles.inputContainer, validationStyles]}>
		 	<ModalDropdown name="type" textStyle = {styles.dropdownDefaultText} dropdownTextStyle={styles.dropdownText} options={['Furniture', 'Clothes', 'Books', 'Appliances', 'Shoes', 'Accessories']} defaultValue="Select" value = {input.value}
		 	onSelect={(itemIndex, itemValue) => {input.onChange(itemValue)}}
        />
        { meta.touched && meta.error && <Text>{ meta.error }</Text> }
        </View>
		)
}

MyDropdown.propTypes = {
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
  container: {
    padding: 45,
  },
 
  dropdownDefaultText: {
    fontSize: 18,
    textAlign: 'center'
  },
  dropdownText: {
    fontSize: 16,
    textAlign: 'center'
  },
    input: {
    height: 30,
    padding: 5
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20
  },
  valid: {
    borderColor: '#53E69D'
  },
  invalid: {
    borderColor: '#F55E64'
  }
});