import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const CardButton = ({handlPress,title}) => {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={handlPress}>
    <Text style={{fontSize:14,fontWeight:'600',color:COLORS.white}}>{title}</Text>
    </TouchableOpacity>
</View>
  )
}

export default CardButton

const styles = StyleSheet.create({
    buttonContainer: {
        height: SIZES.height * (0.05579399),
        backgroundColor:COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        width:SIZES.width*(0.9069767),
        borderRadius:10,
        borderWidth:4,
        borderColor:"#F5FCFF",
       // elevation: 3, // Only for Android (shadow effect)
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow position for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow blur for iOS
  marginTop:15
      }
})