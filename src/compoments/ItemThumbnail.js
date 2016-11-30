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
  Image,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

 export class ItemThumbnail extends Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
        <View style={[styles.Item]}>
          <View style={[styles.ListItemLeft]}>
            <Image style={[styles.ListItemLeftImage]} source={{uri:'http://wx.qlogo.cn/mmopen/rLNTeVq14fyjxzs0lDeP2lnqeRts8xYJsV6bpGVv9sPFE6VDYM8MwbwhZ6lS3b18OF6JiaEHCsUXzHamvOc2ZibMHEFiaJIaSCI/0'}}></Image>
          </View>
          <View style={[styles.ListItemCenter]}>
              <Text style={[styles.ListItemCenterTitle]}>{this.props.title}</Text>
              <Text style={[styles.ListItemCenterDescript]}>{this.props.subTitle}</Text>
          </View>
          <View style={[styles.ListItemRight]}>
            <Text style={[styles.ListItemRightText]}>{this.props.note}</Text>
            <Icon name="angle-right" size={24} color="#999" />
          </View>
        </View>
      );
  };
}


const styles = StyleSheet.create({
  Item:{
    flex:1,
    flexDirection:'row',
    backgroundColor: '#fff',
    borderTopWidth:1/PixelRatio.get(),
    borderTopColor:'#ccc',
    borderBottomWidth:1/PixelRatio.get(),
    borderBottomColor:'#ccc',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10,
  },
  ListItemLeft:{
    alignItems:'center',
    justifyContent:'center'
  },
  ListItemLeftImage:{
    width:50,
    height:50,
    alignItems:'center',
    marginRight:10,
    borderRadius:5,
  },

  ListItemCenter:{
    flex:1,
    justifyContent:'center',
  },
  ListItemCenterTitle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
  },
  ListItemCenterDescript:{
    flex:1,
    alignItems:'center'
  },
  ListItemRight:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingRight:10,
  },
  ListItemRightText:{
    marginLeft:10,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  ListItemRightIcon:{
    marginLeft:10,
    alignItems:'flex-end',
    justifyContent:'center',
  },
});
module.exports=ItemThumbnail;
