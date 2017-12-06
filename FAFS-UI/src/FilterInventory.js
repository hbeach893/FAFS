import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
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
    filter: (inventoryitems, filterKey, sortKey) => dispatch({type: 'FILTER_BY_FILTER_KEY', inventoryitems: inventoryitems, filterKey: filterKey}),
    search: (inventoryitems, searchKey) => dispatch({type: 'SEARCH_BY_SEARCH_KEY', inventoryitems: inventoryitems, searchKey: searchKey})
  }),
)


export default class FilterInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }
  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.dropdownsContainer}>
          <ModalDropdown style={styles.dropdown} dropdownStyle = {styles.dropdownStyle} textStyle = {styles.dropdownDefaultText} dropdownTextStyle={styles.dropdownText} options={['Price: Low to High', 'Price: High to Low', 'A-Z', 'Z-A']} defaultValue="Sort" onSelect={(itemIndex, itemValue) => {
            this.props.sort(this.props.inventoryitems, itemValue, this.props.filterKey);
          }}/>
          <ModalDropdown style={styles.dropdown} dropdownStyle = {styles.dropdownStyle} textStyle = {styles.dropdownDefaultText} dropdownTextStyle={styles.dropdownText} options={['All', 'Furniture', 'Clothes', 'Books', 'Appliances', 'Shoes', 'Accessories', 'Misc.']} defaultValue="Filter" onSelect={(itemIndex, itemValue) => {
            this.props.filter(this.props.inventoryitems, itemValue, this.props.sortKey);
          }}/>
        </View>
        <View style = {styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Search for an item!"
            onChangeText={(searchTerm) => this.setState({searchTerm})}
          />
          <Button
            style = {styles.searchButton}
            onPress={() => this.props.search(this.props.inventoryitems, this.state.searchTerm)}
            title="Search"
            color="navy"
            accessibilityLabel="Search"
          />
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    height:100,
    paddingTop:10,
  },
  dropdownsContainer: {
    height: 50,
    flexDirection: 'row',
  },
  searchContainer: {
    height: 50,
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
    textAlign: 'center',
    color: 'navy'
  },
  dropdownText: {
    fontSize: 16,
    textAlign: 'center'
  },
  search: {
    height: 50,
    textAlign: 'center',
    width: '75%'
  },
  searchButton: {
    width: '25%'
  }
  
});