import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

const Payments = () => {
  return (
    <View style={styles.container}>
    <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:18}}>Make Payments across, the borders</Text>
    <View style={{ flexDirection: "row" }}>
    <Image source={require("../../assets/images/onboarding2.png")} 
     style={{ marginHorizontal: "5%",width: "90%" }}
    />
    </View>
  </View>
  )
}

export default Payments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
      //  paddingTop: StatusBar.currentHeight || 0,
      },
})