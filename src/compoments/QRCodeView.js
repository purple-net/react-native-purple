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
  TextInput
} from 'react-native';
import QRCode from 'react-native-qrcode';


export class QRCodeView extends Component{
  goBack(){
    this.props.navigator.pop();
  };
  state = {
    text: 'http://facebook.github.io/react-native/',
  };
  render(){
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.headerLeftIcon, styles.fontFamily]}>&#xe601;</Text>
            <Text style={[styles.headerLeftText]} onPress={this.goBack.bind(this)}>返回</Text>
          </View>
          <View style={[styles.body]}>
            <QRCode style={{marginTop:100}}
              value={this.state.text}
              size={200}
              bgColor='purple'
              fgColor='white'/>
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
  body:{
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
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

module.exports = QRCodeView;
