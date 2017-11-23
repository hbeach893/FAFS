import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Multiselect from 'react-widgets/lib/Multiselect';

export default function MyMultiselect(props) {
  const { input, ...inputProps } = props;

  return (
    <View style={[styles.inputContainer]}>
      <Multiselect
        {...inputProps}
        onBlur={input.onBlur}
        value={input.value || []} // requires value to be an array
        onChange={input.onChange}
        style={styles.input}
        //valueField={valueField}
        //textField={textField}
      />
    </View>
  );
}

MyMultiselect.propTypes = {
  input: React.PropTypes.shape({
    onBlur: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired,
  }).isRequired,
};

// const renderMultiselect = ({ input, data, valueField, textField }) =>
//   <Multiselect {...input}
//     onBlur={() => input.onBlur()}
//     value={input.value || []} // requires value to be an array
//     data={data}
//     valueField={valueField}
//     textField={textField}
//   />

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
