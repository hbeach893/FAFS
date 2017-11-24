
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Select, SelectTextBox, Option, OptionList } from 'react-native-multi-select';
 
 
export default class MyMultiselectAttempt extends Component {
    static propTypes = {};
 
    types = [
        'Furniture',
        'Clothes',
        'Rides'
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

    removeOption = (option) => {
        var index = types.indexOf(option);
        if (index > -1) {
            types.splice(index, 1);
        }
    }
 
    render() {
        return (
            <Select style={styles.select}>
                <SelectTextBox
                    style={styles.selectTextBox}
                    selectedItem={this.state.selectedItem}
                    placeholder={"Choose tags"}
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
                    styles={styles.optionList}
                    items={this.types}
                    display={this.state.displayOptionList}
                    onAnItemSelected={item => this.addItem(item)}
                    removeItem={item => this.removeItem(item)}>
                    
                    {this.types.map((city, index) => <Option
                        onPress={(item) => {removeOption(item); this.setState({selectedItem: [...this.state.selectedItem, item]})}
                        styles={styles.option}
                        key={index}
                        value={{_id: Math.random()}}>
                        {city}
                    </Option>)}
                </OptionList>
            </Select>
        );
    }
}
 
const styles = StyleSheet.create({
    select: {
   
    },
    selectTextBox: {
       
    },
    optionList: {
         
    },
    option: {
        
    }
});
