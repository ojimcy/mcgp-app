import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

const Dots = () => {
  return (
    <View style={{backgroundColor:COLORS.primary,width: 12, height: 12, borderRadius: 50 / 2,margin:5}}></View>
  )
}

export default Dots