/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text>test</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
});
module.exports = App;
