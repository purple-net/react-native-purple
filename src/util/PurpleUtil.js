
const React = require('react-native');
const {
  PixelRatio,
  Dimensions
} = React;

var  {HOST,APP_KEY,FORMAT} ={};

const _request=function(url,method,body){
  let isOk;
  var options={};
  if (method) {
    options.method=method;
  }
  if (method=="POST") {
    options.headers={
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
  }
  if (body) {
    options.body=JSON.stringify(body);
  }
  return new Promise((resolve, reject) => {
    fetch(url, options)
    .then((response) => {
      if (response.ok) {
        isOk = true;
      } else {
        isOk = false;
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(isOk);
      console.log(responseData);
      if (isOk) {
        resolve(responseData);
      } else {
        reject(responseData);
      }
    })
    .catch((error) => {
      reject(error);
    });
  });
};

const _get=function(url,params){
  if (params){
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return _request(url,'GET');
};

const _post=function(params,body){
  params.format=FORMAT;
  params.app_key=APP_KEY;
  params.timestamp='2016-11-21';
  params.sign='DF980AFE92779F7CA57FBCD81DA82033';
  params.token='-1';

  let url=HOST+'/rest';
  console.log(Object.keys(params));
  if (params){
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  console.log(body);

  return _request(url,'POST',body);
}

const _builderParams=function(url,params){
  if (params){
    let paramsArray = []
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return url;
}

export default {
  getSize(){
    return Dimensions.get('window');
  },
  getPixelRatio(){
    return PixelRatio.get();
  },
  httpGet:_get,
  httpPost:_post,
  builderParams:_builderParams,
  dateFormat:function(value,format) {
    if (value == null || value == '') {
        return '';
    }
    var dt;
    if (value instanceof Date) {
        dt = value;
    }
    else {
        dt = new Date(value);
        if (isNaN(dt)) {
            value = value.replace(/\/Date\((-?\d+)\)\//, '$1');
            dt = new Date();
            dt.setTime(value);
        }
    }
    var o = {
        "M+": dt.getMonth() + 1, //month
        "d+": dt.getDate(),    //day
        "h+": dt.getHours(),   //hour
        "m+": dt.getMinutes(), //minute
        "s+": dt.getSeconds(), //second
        "q+": Math.floor((dt.getMonth() + 3) / 3),  //quarter
        "S": dt.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (dt.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
      RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
}
