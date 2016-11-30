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

 export class PurpleContent extends Component{
   static propTypes = {

   };

   static defaultProps = {
       theme: 'light',
       primary: 'paperGrey'
   };
   constructor(props){
     super(props);
   }
   render(){
       return(
         <View style={[styles.Item]}>
           {this.props.IconLeft?<View style={[styles.ListItemLeft]}>
             <Image style={[styles.ListItemLeftImage]} source={{uri:'http://wx.qlogo.cn/mmopen/rLNTeVq14fyjxzs0lDeP2lnqeRts8xYJsV6bpGVv9sPFE6VDYM8MwbwhZ6lS3b18OF6JiaEHCsUXzHamvOc2ZibMHEFiaJIaSCI/0'}}></Image>
           </View>:null}
           <View style={[styles.ListItemCenter]}>
               <Text style={[styles.ListItemCenterTitle]}>{this.props.title}</Text>
           </View>
           {this.props.IconRight?<View style={[styles.ListItemRight]}>
             <Text style={[styles.ListItemRightText]}>{this.props.note}</Text>
             <Icon name="angle-right" size={24} color="#999" />
           </View>:null}
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
    marginTop:10,
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
module.exports=PurpleContent;
