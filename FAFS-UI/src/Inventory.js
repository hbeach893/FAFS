import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import ItemDisplay from './ItemDisplay';
import ItemPopup from './ItemPopup';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
} from 'react-native';


{/*

The code for this portion has been modified from https://github.com/rationalappdev/MovieTickets

MovieTickets/src/Movies.js

*/}

@connect(
  state => ({
    inventoryitems: state.inventoryStatus.inventoryitems,
    loading: state.inventoryStatus.loading,
    filteredItems: state.filterInventory.filteredItems,
    attemptedFilter: state.filterInventory.attemptedFilter,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true}),
  }),
)


export default class Inventory extends Component {
  state = {
    popupIsOpen: false,
  }

  openItem = (item) => {
    this.setState({
      popupIsOpen: true,
      item,
    });
  }

  closeItem = () => {
    this.setState({
      popupIsOpen: false,
    });
  }

  render() {
    const { inventoryitems, loading, refresh, filteredItems, attemptedFilter } = this.props;
    var inventory = attemptedFilter ? filteredItems : inventoryitems;
    return (
      <View style={styles.container}>
      { inventory.length > 0 ?
        <ScrollView

          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={refresh}
                />
              }
        >
          {inventory.map((item, index) => <ItemDisplay
            item={item}
            onOpen={this.openItem}
            key={index}
          />)}
        </ScrollView>
        : 
         <Text> We're sorry. We cannot find the item want. </Text>
          }

        <ItemPopup
          item={this.state.item}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeItem}
        />
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});
