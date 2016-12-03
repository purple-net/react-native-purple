'use strict';

//var React = require('react-native');
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  VibrationIOS,
} from 'react-native';

import Camera from 'react-native-camera';
import PurpleHeader from './PurpleHeader';

var PurpleQRCodeView = React.createClass({

  propTypes: {
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      cancelButtonVisible: false,
      cancelButtonTitle: 'Cancel',
    };
  },

  _onPressCancel: function() {
    var $this = this;
    requestAnimationFrame(function() {
      $this.props.navigator.pop();
      if ($this.props.onCancel) {
        $this.props.onCancel();
      }
    });
  },

  _onBarCodeRead: function(result) {
    var $this = this;
    if (this.barCodeFlag) {
      this.barCodeFlag = false;
      setTimeout(function() {
        VibrationIOS.vibrate();
        $this.props.navigator.pop();
        $this.props.onSucess(result);
      }, 1000);
    }
  },

  render: function() {
    this.barCodeFlag = true;
    return (
      <View style={[{flex:1}]}>
        <PurpleHeader title="二维码/条码" goBack={()=>{
          this.props.navigator.pop();
        }}>
        </PurpleHeader>
        <Camera onBarCodeRead={this._onBarCodeRead}  style={styles.camera}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
          </View>
        </Camera>
      </View>
    );
  },
});

var styles = StyleSheet.create({

  camera: {
    flex:1,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
});

module.exports = PurpleQRCodeView;
