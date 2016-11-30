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


export class PurpleWebView extends Component{
  constructor(props){
    super(props);
    this.state={
      source:props.source?props.source:{}
    };
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
          <View style={styles.header}>
            <Text style={[styles.headerLeftIcon, styles.fontFamily]}>&#xe601;</Text>
            <Text style={[styles.headerLeftText]} onPress={this.goBack.bind(this)}>返回</Text>
          </View>
          <View style={{flex:1}}>
            <WebView startInLoadingState={true}  style={{width:width,height:height}} source={{uri: this.state.url}} bounces={true}  >
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
