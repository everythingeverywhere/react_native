/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
 import placeImage from "./src/assets/animal-beach-bird-66258.jpg";

class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }; 
  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace()
;  } 
// if key is equal to the key in the new array don't include it hence deleting it.
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key)
  };
    
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <Text style={styles.large}>{this.state.places.value}</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.props.places} 
          onItemSelected={this.placeSelectedHandler} 
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContainer: {
    width: '100%',
  },
  large: {
    fontSize: 34,
    color: 'red',

  },
  colorBlock: {
    color: 'blue',
    height: '25%',
    width: '100%',
    backgroundColor: 'powderblue'
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: () =>  dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectedPlace(key)),
    onDeselectPlace: (key) => dispatch(deselectedPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)