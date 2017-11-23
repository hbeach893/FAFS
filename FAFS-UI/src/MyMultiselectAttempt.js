import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Select, SelectTextBox, Option, OptionList } from 'react-native-multi-select';


export default function MyMultiselect(props) {

// LocationDropDown extends Component {
    propTypes = {};

    cities = [
        'Babolsar',
        'Sari',
        'Babol',
        'Qaemshahr',
        'Gorgan',
        'Tehran',
        'ali abad',
        'gonbad',
        'mashhad',
        'esfehan',
        'shiraz',
        'kerman',
        'ilam',
        'sanandaj',
        'mahshahr',
        'behshar',
        'tonekabon'
    ];

    state = {
        selectedItem: [],
        text: "",
        displayOptionList: false
    };

    updateText = text => {
        this.setState({text});
    };

    addItem = item => {
        this.setState({selectedItem: [...this.state.selectedItem, item]})
    };

    removeItem = removedItem => {
        this.setState({
            selectedItem: this.state.selectedItem.filter(item => {
                if (item._id !== removedItem._id)
                    return item;
            })
        });
    };
    return (
                <Select style={styles.select}>
                    <SelectTextBox
                        selectedItem={this.state.selectedItem}
                        placeholder={"شهر خود را انتخاب کنید."}
                        onPressOut={(removedItem) => this.setState({
                            selectedItem: this.state.selectedItem.filter(text => {
                                if (text !== removedItem)
                                    return text;
                            })
                        })}
                        onTextInputFocus={() => this.setState({displayOptionList: true})}
                        onTextInputLoosFocus={() => this.setState({displayOptionList: false})}
                        onSelectTextBoxChanged={event => this.updateText(event.nativeEvent.text)}
                    />
                    <OptionList
                        text={this.state.text}
                        items={this.cities}
                        display={this.state.displayOptionList}
                        onAnItemSelected={item => this.addItem(item)}
                        removeItem={item => this.removeItem(item)}>
                        {this.cities.map((city, index) => <Option
                            onPress={item => this.setState({selectedItem: [...this.state.selectedItem, item]})}
                            key={index}
                            value={{_id: Math.random()}}>
                            {city}
                        </Option>)}
                    </OptionList>
                </Select>
            );
        }





// import React from 'react';
// import { Multiselect, View, Text, StyleSheet } from 'react-native';
//
//
// export default function MyMultiselect(props) {
//   const { input, data, valueField, textField, ...inputProps } = props;
//
//   return (
//     <View style={[styles.inputContainer]}>
//       <Multiselect
//         {...inputProps}
//         onBlur={() => input.onBlur()}
//         value={input.value || []} // requires value to be an array
//         data={data}
//         valueField={valueField}
//         textField={textField}
//       />
//     </View>
//   );
// }

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
