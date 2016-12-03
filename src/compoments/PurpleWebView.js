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
  WebView,
  Dimensions,
} from 'react-native';
import PurpleHeader from './PurpleHeader';


export class PurpleWebView extends Component{
  constructor(props){
    super(props);
    this.state={
      title:props.title?props.title:'',
      source:props.source?props.source:{},
    };
    console.log(this.state);
  };
  componentWillMount(){

  };
  goBack(){
   this.props.navigator.pop();
  };
  render(){
      var {height, width} = Dimensions.get('window');
      return(
        <View style={styles.container}>
          <PurpleHeader title={this.state.title} goBack={this.props.goBack}>
          </PurpleHeader>
          <View style={{flex:1}}>
            <WebView automaticallyAdjustContentInsets={false}﻿ startInLoadingState={true}  style={{width:width,height:height}} source={this.state.source} bounces={true}  >
            </WebView>
          </View>
        </View>
      );
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    paddingTop:20,
    paddingLeft:10,
    height:55,
    backgroundColor:'#444',
    flexDirection:'row',
    alignItems:'center',
  },
  fontFamily:{
    color: '#fff',
    fontFamily:'iconfont',
    fontSize: 24
  },
  headerLeftText:{
    fontSize:20,
    color:'#fff'
  },
  headerLeftIcon:{
    marginTop:5,
  }
});

module.exports = PurpleWebView;
