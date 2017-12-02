import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Button
} from 'react-native';
import { connect } from 'react-redux';



@connect(
  state => ({
    drivers: state.driverStatus.drivers
  }),
  dispatch => ({
    search: (drivers, searchKey) => dispatch({type: 'SEARCH_RIDES', drivers: drivers, searchKey: searchKey})
  }),
)


export default class FilterRides extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }
  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Search for an item!"
            onChangeText={(searchTerm) => this.setState({searchTerm})}
          />
          <Button
            style = {styles.searchButton}
            onPress={() => this.props.search(this.props.drivers, this.state.searchTerm)}
            title="Search"
            color="#841584"
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
  },
  searchContainer: {
    height: 50,
    paddingTop: 25,
    paddingBottom: 25,
    flexDirection: 'row',
  },
  search: {
    height: 50,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: '75%'
  },
  searchButton: {
    width: '25%'
  }
})
  