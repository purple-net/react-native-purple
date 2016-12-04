
const React = require('react-native');
const {
  PixelRatio,
  Dimensions
} = React;

export default {
  request:function(url,method,body){
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

  get:function(url,params){
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

  post:function(params,body){
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
}
