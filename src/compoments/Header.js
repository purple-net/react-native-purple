import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  PixelRatio,
  Dimensions,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      title:props.title?props.title:'',
      showGoBack:props.goBack?true:false,
      headerCenterText:props.goBack?'headerCenterText':'headerCenterTextnoGoBack',
    };
    if (this.state.showGoBack) {
      this.state.headerCenterText={
        fontSize:18,
        color:'#fff',
        marginLeft:-80,
      }
    }else{
      this.state.headerCenterText={
        fontSize:18,
        color:'#fff',
      }
    }
  }
  goBack(){
    this.props.goBack();
  };
  render(){
      return(
        <View style={styles.header}>
          {this.state.showGoBack?
            <TouchableOpacity   style={[styles.headerLeft]} onPress={this.goBack.bind(this)}>
            <Icon style={[styles.headerLeftIcon]} name="angle-left"  color="#fff" />
            <Text style={[styles.headerLeftText]} >返回</Text>
          </TouchableOpacity>:null }
          <View style={[styles.headerCenter]}>
            <Text style={this.state.headerCenterText}>{this.state.title}</Text>
          </View>
          <View style={[styles.headerRight]}>
          </View>
        </View>
      );
  };
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
  },
  header:{
    paddingTop:20,
    paddingLeft:10,
    height:55,
    backgroundColor:'#444',
    flexDirection:'row',
    alignItems:'center',
  },
  headerLeft:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  headerLeftText:{
    fontSize:16,
    color:'#fff',
    marginLeft:5,
  },
  headerLeftIcon:{
    marginLeft:5,
    fontSize:20,
  },
  headerCenter:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

});

module.exports = Header;
