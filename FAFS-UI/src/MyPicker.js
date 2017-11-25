import React from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';


export default function MyPicker(props) {
  const { input: { onChange, value, ...inputProps }, children, ...pickerProps } = props;

  return (
    <View style={[styles.inputContainer]}>
      <Picker
        selectedValue={ value }
        onValueChange={ value => onChange(value) }
        { ...inputProps }
        { ...pickerProps }
      >
        { children }
      </Picker>
    </View>
  );
}

// MyPicker.propTypes = {
//   input: React.PropTypes.shape({
//     onBlur: React.PropTypes.func.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     onFocus: React.PropTypes.func.isRequired,
//     value: React.PropTypes.any.isRequired
//   }).isRequired,
//   meta: React.PropTypes.shape({
//     active: React.PropTypes.bool.isRequired,
//     error: React.PropTypes.string,
//     invalid: React.PropTypes.bool.isRequired,
//     pristine: React.PropTypes.bool.isRequired,
//     visited: React.PropTypes.bool.isRequired
//   }).isRequired
// };

//TO BE PUT IN MYFORM.JS
// <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Choose a tag</Text>
// <Field
//   name={'tags'}
//   component={MyPicker}
//   iosHeader="Select a tag"
//   mode="dropdown"
// >
//   <Picker.Item label={'Atwater'} value={1} />
//   <Picker.Item label={'Battel'} value={2} />
//   <Picker.Item label={'Coffrin'} value={3} />
//   <Picker.Item label={'Hepburn'} value={4} />
//   <Picker.Item label={'Social houses'} value={5} />
// </Field>


const styles = StyleSheet.create({
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
