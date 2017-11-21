import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';


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


export default class FilterSection extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <ModalDropdown textStyle = {styles.dropdownDefaultText} dropdownTextStyle={styles.dropdownText} options={['Price: Low to High', 'Price: High to Low', 'A-Z', 'Z-A']} defaultValue="Sort" onSelect={(itemIndex, itemValue) => {this.props.sort(this.props.inventoryitems, itemValue)}}/>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    paddingTop: 40,
    paddingLeft: 40,
    paddingBottom: 20,
  },
  dropdownDefaultText: {
    fontSize: 18
  },
  dropdownText: {
    fontSize: 16
  }
  
});