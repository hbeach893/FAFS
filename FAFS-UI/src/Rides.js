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
    drivers: state.driverStatus.drivers,
    loading: state.driverStatus.loadingDrivers,
    filteredRides: state.filterRides.filteredRides,
    attemptedFilter: state.filterRides.attemptedFilter,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_RIDER_DATA', drivers: [], loadingDrivers:true}),
  }),
)


export default class Rides extends Component {

  render() {
   const { loading, refresh, drivers, filteredRides, attemptedFilter } = this.props;
   var rides = attemptedFilter ? filteredRides : drivers;
    return (
      <View style={styles.container}>
      { rides.length > 0 ?
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
          {rides.map((item, index) => <RideDisplay
            item={item}
            onOpen={this.openItem}
            key={index}
          />)}
        </ScrollView>
        :  <Text> We're sorry. We cannot find the ride you want. </Text>
          }

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
