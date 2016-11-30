/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ActivityIndicator
} from 'react-native';


export class Loading extends Component{
  render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='small' color='#268DEF'></ActivityIndicator>
        </View>
      );
  };
};

const styles = StyleSheet.create({
  flex:{
    marginTop:35,
    height:50,
    borderBottomWidth:3/PixelRatio.get(),
    borderBottomColor:'#ef2d36',
    alignItems:'center'
  },
  font:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  },
  font_1:{
    color:'#cd1d1c'
  },
  font_2:{
    color:'#fff',
    backgroundColor:'#cd1d1c'
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center'
  },
  list_item_font:{
    fontSize:16
  },
});

module.exports = Loading;
