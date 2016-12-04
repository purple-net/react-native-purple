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
  Alert,
  ScrollView,
  PixelRatio,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import Button from 'react-native-button';
import {request} from './Util';
import TradeDetail from './TradeDetail'
import Header from './components/Header'
import {get,post} from './util/HttpClient'



class PurpleSearch extends Component{
  constructor (props) {
      super(props);
      this.state = {
         value: '',
         keyboardType:props.keyboardType?props.keyboardType:'default'
      };
      this.parent=props.parent;
  };
  componentWillMount(){

  };
  onChangeText(e){
    this.setState({value:e});
    this.parent.onSearchBarChangeText(this.state.value);
  };
  onEndEditing(){
    this.parent.onSearchBarEndEditing(this.state.value);
  };
  render(){
    return(
      <View style={[styles.searchBar,styles.flex]}>
        <TextInput
          keyboardType={this.state.keyboardType}
          autoCapitalize={'characters'}
          style={[styles.searchBarTextInput]}
          clearButtonMode="while-editing"
          placeholder="请输入提单号或者箱号"
          value={this.state.value}
          onChangeText={this.onChangeText.bind(this)}
          onEndEditing={this.onEndEditing.bind(this)}
          returnKeyType="go">
        </TextInput>
        <TouchableHighlight onPress={this.onEndEditing.bind(this)} style={[styles.searchBarBtn]}>
          <Text style={[styles.searchBarBtnText]}>搜索</Text>
        </TouchableHighlight>
      </View>
  )}
};
class SearchHistory extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>搜索历史</Text>
      </View>
    );
  };
}
class SearchContent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <Text>搜索建议</Text>
      </View>
    );
  };
};
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:props.data,
    };
  };

  render(){
    return(
      <ScrollView style={{marginTop:10}}>
        <Text>qq</Text>
        <PurpleItem></PurpleItem>
        <PurpleItem></PurpleItem>
      </ScrollView>
  )};
}
class Loading extends Component{
  render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size='small' color='#268DEF'></ActivityIndicator>
        </View>
      );
  }
};
class PurpleItem extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
        <View style={{marginLeft:15,marginTop:10}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{color:'black',fontSize:14,backgroundColor:'#00000000'}}>已提箱</Text>
            <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
              <Text style={{color:'#777',fontSize:12,backgroundColor:'#00000000'}}>2016-11-11 23:12</Text></View>
            </View>
            <Text style={{color:'#777',fontSize:12,marginTop:10,backgroundColor:'#00000000'}}>备注</Text>
        </View>
      </View>)
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
  },
  searchBar:{
    flexDirection:'row',
    marginTop:10,
  },
  searchBarTextInput:{
    width:Dimensions.get('window').width-100,
    height:35,
    borderWidth:1,
    marginLeft:5,
    borderColor:'#ccc',
    borderRadius:4
  },
  searchBarBtn:{
    width:90,
    backgroundColor:'#666',
    height:35,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:-5,
    marginRight:5,
    borderRadius:4,
  },
  searchBarBtnText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
    justifyContent:'center',
    alignItems:'center',
  },

});

export class Trade extends Component{
  constructor(props){
    super(props);
    this.state={
      Loading:false,
      SearchContent:false,
      SearchResult:false,
      SearchHistory:true,
    };
  };
  onSearchBarChangeText(data){
    console.log(data);
  };
  showLoading(){
    this.setState({
      Loading:true,
    });
  };
  hideLoading(){
    this.setState({
      Loading:false,
    });
  };

  onSearchBarEndEditing(data){
    let isOk;
    this.showLoading();
    this.setState({
      SearchHistory:false,
    });

    get({
      method:'nbeport.data.trade.get',
      content:'ZIMUNGB9099894',
      openId:'test',
    })
    .then((responseData)=>{
      this.hideLoading();
      this.goTradeDetail("提单号:"+data,responseData);
    })
    .catch((err)=>{
      console.log('err');
      console.log(err);
      Alert.alert(JSON.stringify(err));
      this.hideLoading();
    });
  };
  goTradeDetail(title,data){
    this.props.parent.go({
      component:TradeDetail,
      passProps: {
        data:data,
        title:title
        }
    });
    setTimeout(()=>{
      this.setState({
        SearchHistory:true,
        SearchContent:false,
      });
    },1000);
  };
  componentWillMount(){

  };
  render(){
      return(
        <View style={styles.container}>
          <Header title="物流可视化" goBack={()=>{this.props.navigator.pop();}}></Header>
          <SearchBar parent={this}></SearchBar>
          {this.state.Loading?<Loading></Loading>:null}
          {this.state.SearchHistory?<SearchHistory></SearchHistory>:null}
          {this.state.SearchContent?<SearchContent></SearchContent>:null}
          {this.state.SearchResult?<SearchResult data={this.state.data}></SearchResult>:null}
        </View>
      );
  };
};

module.exports = PurpleSearch;
