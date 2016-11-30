import React, { Component } from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
} from 'react-native';

import colors from '../config/colors';

export const purpleStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.grey6,
  },
  marginTop10:{
    marginTop:10,
  }
});
