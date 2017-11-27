import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import RideDisplay from './RideDisplay';
import ItemPopup from './ItemPopup';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
  // ...others
} from 'react-native';


@connect(
  state => ({
    riders: state.riderStatus.riders,
    drivers: state.driverStatus.drivers,
    loading: state.riderStatus.loadingRiders,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_RIDER_DATA', riders: [], loadingRiders:true}),
  }),
)


export default class DriveRequests extends Component {
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
   const { riders, loading, refresh, drivers } = this.props;
 
    return (
      <View style={styles.container}>
      { drivers ?
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
          {drivers.map((item, index) => <RideDisplay
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