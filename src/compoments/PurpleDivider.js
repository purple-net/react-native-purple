import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

let styles = {}

const PurpleDivider = ({style}) => (
  <View style={[styles.container, style && style]} />
)

styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: colors.grey5
  }
})

export default PurpleDivider
