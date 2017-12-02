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
    sortKey: state.filterInventory.sortKey,
    filterKey: state.filterInventory.filterKey
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true}),
    sort: (inventoryitems, sortKey, filterKey) => dispatch({type: 'SORT_BY_SORT_KEY', inventoryitems: inventoryitems, sortKey: sortKey}),
    filter: (inventoryitems, filterKey, sortKey) => dispatch({type: 'FILTER_BY_FILTER_KEY', inventoryitems: inventoryitems, filterKey: filterKey})
  }),
)


export default class FilterSection extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <ModalDropdown style={styles.dropdown} dropdownStyle = {styles.dropdownStyle} textStyle = {styles.dropdownDefaultText} dropdownTextStyle={styles.dropdownText} options={['Price: Low to High', 'Price: High to Low', 'A-Z', 'Z-A']} defaultValue="Sort" onSelect={(itemIndex, itemValue) => {
          this.props.sort(this.props.inventoryitems, itemValue, this.props.filterKey);
        }}/>
        <ModalDropdown style={styles.dropdown} dropdownStyle = {styles.dropdownStyle} textStyle = {styles.dropdownDefaultText} dropdownTextStyle={styles.dropdownText} options={['All', 'Furniture', 'Clothes', 'Books', 'Appliances', 'Shoes', 'Accessories']} defaultValue="Filter" onSelect={(itemIndex, itemValue) => {
          this.props.filter(this.props.inventoryitems, itemValue, this.props.sortKey);
        }}/>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  dropdown: {
    width: '50%',

  },
  dropdownStyle: {
    width: '50%',
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