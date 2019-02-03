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
import placeImage from "./src/assets/animal-beach-bird-66258.jpg"

export default class App extends Component {

  state = {
    places: [],
  }

  placeAddedHandler = placeName => {
    this.setState( prevState => {
      return {
          places: prevState.places.concat({
            key: Math.random(),
            name: placeName,
            image: {
              uri: 'https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?cs=srgb&dl=adventure-beach-blue-386025.jpg&fm=jpg'
            }
          })
      }
    });
  }; 
// if key is equal to the key in the new array don't include it hence deleting it.
  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    })
  };
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.large}>{this.state.places.value}</Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places} 
          onItemDeleted={this.placeDeletedHandler} 
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
