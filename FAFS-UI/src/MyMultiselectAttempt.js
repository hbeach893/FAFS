
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import { Select, SelectTextBox, Option, OptionList } from 'react-native-multi-select';
 
 
export default class MyMultiselectAttempt extends Component {
    static propTypes = {};
 
    types = [
        'Furniture',
        'Clothes',
        'Rides',
        'Appliances',
        'Shoes'
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
 
    // removeItem = (removedItem) => {
    //     this.setState({
    //         selectedItem: this.state.selectedItem.filter(item => {
    //             if (item._id !== removedItem._id)
    //                 return item;
    //         })
    //     });
    //     this.types.push(removedItem);
    //     Alert.alert(JSON.stringify(removedItem));
    // };

    removeOption = (option) => {
        var index = this.types.indexOf(option);
        if (index > -1) {
            this.types.splice(index, 1);
        }

        this.setState({selectedItem: [...this.state.selectedItem, option]})
    }
 
    render() {
        return (
            <Select style={styles.select}>
                <SelectTextBox
                    style={styles.selectTextBox}
                    selectedItem={this.state.selectedItem}
                    placeholder={"Choose tags"}
                    onPressOut={(removedItem) => {this.setState({
                        selectedItem: this.state.selectedItem.filter(text => {
                            if (text !== removedItem)
                                return text;
                        })
                        
                    })
                    this.types.push(removedItem);
                }}
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
                        onPress={item => this.removeOption(item) }
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
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap',  
    },
    option: {
        
    }
});
