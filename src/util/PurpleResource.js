import PurpleUtil from './PurpleUtil';


export default function(url,options){

  const builderParams=function(url,params){
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
  const request=function(url,method,body){
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

  return{
    query(params){
      url=builderParams(url,params);
      let isOk;
      var options={method:'GET'};
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

    },
    save(params,body){
      url=builderParams(url,params);
      console.log(url);
      return PurpleUtil.httpGet(url,{
        method:'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(body),
      });
    }
  }
}
