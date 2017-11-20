import React, { Component } from 'react';
import {
  Picker,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

@connect(
  state => ({
    inventoryitems: state.inventoryStatus.inventoryitems,
    loading: state.inventoryStatus.loading,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true}),
    sort: (inventoryitems, sortKey) => dispatch({type: 'SORT_BY_SORT_KEY', inventoryitems: inventoryitems, sortKey: sortKey}),
  }),
)


export default class SelectBar extends Component {
  constructor(props) {
  super(props);
  this.state = {
    sortKey: "HI_TO_LO"
  };
  };
  render(){
    return (
      <View>
        <Picker
          selectedValue={this.state.sortKey}
          onValueChange={(itemValue, itemIndex) => {this.setState({sortKey: itemValue}); this.props.sort(this.props.inventoryitems, itemValue)}}>
          <Picker.Item label="Price High to Low" value="HI_TO_LO" />
          <Picker.Item label="Price Low to High" value="LO_TO_HI" />
          <Picker.Item label="Title A to Z" value="A_TO_Z" />
          <Picker.Item label="Title Z to A" value="Z_TO_A" />
        </Picker>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
});