import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const Features = ({childeren}) => {
  return (
    <View style={styles.content}>
      {childeren}
    </View>
  )
}

export default Features

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        height:SIZES.height*(0.05901),
        justifyContent:'space-between',
        marginHorizontal:'4%',width:'92%',
        marginTop:10
    }
})