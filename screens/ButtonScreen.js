import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../constants/theme'

const ButtonScreen = () => {
  return (
    <View style={styles.button}>
      <Text>ButtonScreen</Text>
    </View>
  )
}

export default ButtonScreen

const styles = StyleSheet.create({
    button:{
      backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    width: '80%',
    margin: 10,
    height:SIZES.height/14
      }
})