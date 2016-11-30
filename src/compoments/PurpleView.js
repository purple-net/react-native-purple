import React from 'react'
import { View, StyleSheet } from 'react-native'
//import colors from '../config/colors'
let styles

const PurpleView = ({children, containerStyle}) => (
  <View style={[styles.viewContainer, containerStyle && containerStyle]}>
    {children}
  </View>
)

PurpleList.propTypes = {}

styles = StyleSheet.create({
  viewContainer: {
    flex:1
  }
})

export default PurpleView
