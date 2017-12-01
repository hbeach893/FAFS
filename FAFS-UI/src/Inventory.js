import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import { inventory } from './data';
import ItemDisplay from './ItemDisplay';
import ItemPopup from './ItemPopup';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  // ...others
} from 'react-native';


@connect(
  state => ({
    inventoryitems: state.inventoryStatus.inventoryitems,
    loading: state.inventoryStatus.loading,
    filteredItems: state.filterInventory.filteredItems,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_INVENTORY_DATA', inventoryitems: [], loading:true}),
  }),
)


export default class Inventory extends Component {
  // Add starting here
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


  // Untill here
  render() {
    const { inventoryitems, loading, refresh, filteredItems } = this.props;
    var inventory = filteredItems.length > 0 ? filteredItems : inventoryitems;


    return (
      <View style={styles.container}>
      { inventoryitems ?
        <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
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
        : <ActivityIndicator
              animating={loading}
              style={styles.loader}
              size="large"
            />
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
