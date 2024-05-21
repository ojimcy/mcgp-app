import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const NavTab = ({handlPress,title}) => {
  return (
    <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={handlPress}>
         <Text style={{fontSize:14,fontWeight:500}}>{title}</Text>
         </TouchableOpacity>
    </View>
  )
}

export default NavTab

const styles = StyleSheet.create({
    buttonContainer: {
        height: SIZES.height * (0.05901),
        backgroundColor: "#F5FCFF",
        alignItems: "center",
        justifyContent: "center",
        width: SIZES.width * 0.4534883,
        borderWidth:4,
        borderColor:"#F5FCFF",
       // elevation: 3, // Only for Android (shadow effect)
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow position for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 3.84, // Shadow blur for iOS
  //marginTop:10
      }
})