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
  ListView,
  ScrollView,
  PixelRatio,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  AsyncStorage,
  Navigator,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal   from 'react-native-modalbox';

import colors from '../config/colors';
import fonts from '../config/fonts';
import PurpleHeader from './PurpleHeader';
import PurpleItem from './PurpleItem';

export class PurpleSearchInput extends Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      text:'',
      historyItems:[],
      dataSource: new ListView.DataSource({
        rowHasChanged: function(row1, row2) {return row1 !== row2},
      }),
      loaded: false,
    };
    this.cacheKeyName='SearchHistory$'+props.name;
  }
  componentWillMount(){
    console.log('componentWillMount');
    AsyncStorage.getAllKeys().then((keys,err)=>{
      if (err) {
        console.log('读取缓存出错了'+err);
        return;
      }
      let searchKeys=[];
      Object.keys(keys).forEach((i,val)=>{
        if (keys[i].indexOf(this.cacheKeyName)==0) {
          searchKeys.push(keys[i]);
        }
      })

      AsyncStorage.multiGet(searchKeys).then((result,err)=>{
        if (err) {
          return;
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result),
          loaded: true,
        });
        if (this.props.onHistoryEnd) {
          this.setState({historyItems:result},()=>{
            this.props.onHistoryEnd(result);
          });
        }else {
          this.setState({historyItems:result});
        }
      });

    });
  }
  onEndEditing(val){
    if (val) {
      this.props.onEndEditing(val);
    }else {
      Alert.alet('操作提示','请输入关键字');
    }
  }
  onChangeText(val){

  }
  render(){
    return(
      <View style={[{flex:1}]}>
        <TouchableOpacity style={[styles.searchInputStyle]} onPress={()=>{
          this.props.root.push({
            component:PurpleSearchView,
            configureScene:()=>{
              return Navigator.SceneConfigs.FadeAndroid;
            },
            params:{
              root:this.props.root,
              name:this.props.name,
              onHistoryEnd:this.props.onHistoryEnd,
              onEndEditing:this.onEndEditing.bind(this),
              onChangeText:this.onChangeText.bind(this),
            },
          });
        }}>
          <View style={[styles.searchInput]}>
            <Text style={[styles.searchInputText]}>{this.props.defaultValue}</Text>
          </View>
          <View style={[styles.searchInputBtn]}>
            <Text style={[styles.searchInputBtnText]}>搜索</Text>
          </View>
        </TouchableOpacity>

        <ScrollView style={[{flex:1}]}>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
          <PurpleItem
          rightIcon={{name:'search'}}
          title={rowData[1]}
          onPress={()=>{
            this.setState({text:rowData[1]},()=>{
              this.onEndEditing();
            });
          }} ></PurpleItem>}>
          </ListView>
        </ScrollView>
      </View>
    )
  };
}
class PurpleSearchView extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      dataSource: new ListView.DataSource({
        rowHasChanged: function(row1, row2) {return row1 !== row2},
      }),
      loaded: false,
    };
    this.cacheKeyName='SearchHistory$'+props.name;
  };
  componentWillMount(){
    AsyncStorage.getAllKeys().then((keys,err)=>{
      if (err) {
        console.log('读取缓存出错了'+err);
        return;
      }
      let searchKeys=[];
      console.log(this.cacheKeyName);
      Object.keys(keys).forEach((i,val)=>{
        if (keys[i].indexOf(this.cacheKeyName)==0) {
          searchKeys.push(keys[i]);
        }
      })
      AsyncStorage.multiGet(searchKeys).then((result,err)=>{
        if (err) {
          return;
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result),
          loaded: true,
        });
        if (this.onHistoryEnd) {
          this.onHistoryEnd(items);
        }
      });

    });
  }
  onChangeText(val){
    this.setState({text:val});
  }
  onEndEditing(){
    let val=this.state.text;
    if (val=='') {
      Alert.alert('操作提示','请输入关键字');
      return ;
    }
    AsyncStorage.setItem(this.cacheKeyName+'$$'+val,val);
    if (this.props.onEndEditing) {
      this.refs.modalLoading.open();
      this.props.onEndEditing(val,()=>{
        this.refs.modalLoading.close();
      },()=>{
        this.refs.modalLoading.close();
      });
    }
  }
  render(){
      return(
        <View style={styles.container}>
          <PurpleSearchHeader
          root={this.props.root}
          parent={this}
          onChangeText={this.onChangeText.bind(this)}
          onEndEditing={this.onEndEditing.bind(this)}>
          </PurpleSearchHeader>
          <ScrollView style={[{flex:1}]}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
            <PurpleItem
            rightIcon={{name:'search'}}
            title={rowData[1]}
            onPress={()=>{
              this.setState({text:rowData[1]},()=>{
                this.onEndEditing();
              });
            }} ></PurpleItem>}>
            </ListView>
          </ScrollView>
          <Modal style={[styles.modal, styles.modal2]}
          position={"center"}
          ref={"modalLoading"}
          backdropPressToClose={false}
          isDisabled={false}>
            <ActivityIndicator
              color="#ccc"
              animating={true}
              style={[styles.modalLoadingIcon, {transform: [{scale: 0.5}]}]}
              size="large"
            />
            <Text style={[styles.modalLoadingText]}>正在搜索...</Text>
          </Modal>
          {this.state.Loading?<PurpleLoading></PurpleLoading>:null}

          {this.state.SearchHistory?<SearchHistory></SearchHistory>:null}
          {this.state.SearchContent?<SearchContent></SearchContent>:null}
          {this.state.SearchResult?<SearchResult data={this.state.data}></SearchResult>:null}
        </View>
      );
  };
};
class PurpleSearchHeader extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',
      keyboardType:props.keyboardType?props.keyboardType:'default'
    };
  }
  render(){
    return(
      <View style={[styles.searchHeader,styles.flex]}>
        <TouchableOpacity   style={[styles.searchHeaderBack]} onPress={()=>{this.props.root.pop();}}>
          <Icon style={[styles.searchHeaderBackIcon]} name="angle-left"  color="#fff" />
        </TouchableOpacity>
        <TextInput ref='searchInput' style={[styles.searchHeaderTextInput]}
          keyboardType={this.state.keyboardType}
          autoFocus={true}
          autoCapitalize={'characters'}
          style={[styles.searchHeaderTextInput]}
          clearButtonMode="while-editing"
          placeholder="请输入提单号或者箱号"
          onChangeText={this.props.onChangeText}
          returnKeyType="go">
        </TextInput>
        <TouchableOpacity onPress={this.props.onEndEditing} style={[styles.searchHeaderSearchBtn]}>
          <Text style={[styles.searchHeaderSearchBtnText]}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    marginTop:25,
    backgroundColor:'#ccc',
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
  searchInputStyle:{
    padding:5,
    flexDirection:'row',
    backgroundColor:colors.grey6,
  },
  searchInput:{
    flex:1,
    height:30,
    borderWidth:1,
    marginLeft:5,
    marginRight:5,
    marginTop:5,
    marginBottom:5,
    borderColor:colors.grey5,
    backgroundColor:'#fff',
    borderRadius:4,
  },
  searchInputText:{
    marginTop:5,
    paddingLeft:5,
    justifyContent:'center',
  },
  searchInputBtn:{
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight:10,
    paddingLeft:10,
  },
  searchInputBtnText:{
    justifyContent:'center',
    alignItems:'center',
  },

  searchHeader:{
    paddingTop:25,
    flexDirection:'row',
    backgroundColor:colors.grey6,
    paddingBottom:10,
    borderBottomWidth:1/PixelRatio.get(),
    borderBottomColor:colors.grey5,
  },

  searchHeaderBack:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  searchHeaderBackText:{
    fontSize:16,
    color:colors.grey2,
    marginLeft:5,
  },
  searchHeaderBackIcon:{
    marginLeft:5,
    fontSize:20,
    color:colors.grey2,
  },
  searchHeaderTextInput:{
    flex:1,
    height:30,
    borderWidth:1,
    marginLeft:5,
    borderColor:colors.grey5,
    backgroundColor:'#fff',
    borderRadius:4,
    fontSize:12,
    paddingLeft:10,
  },

  searchHeaderSearchBtn:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    paddingLeft:10,
  },
  searchHeaderSearchBtnText:{
    justifyContent:'center',
    alignItems:'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  modal2: {
    width:Dimensions.get('window').width/2,
    height:50,
    borderRadius:3,
  },
  modalLoadingIcon:{
    marginLeft:-20,
  },
  modalLoadingText:{

  }

});

module.exports = PurpleSearchInput;
