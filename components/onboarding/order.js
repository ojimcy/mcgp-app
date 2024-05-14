import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

const Order = () => {
  return (
    <View style={styles.container}>
    <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:18}}>Order for Service,
    Anytime anywhere
    </Text>
    <View style={{ flexDirection: "row" }}>
    <Image source={require("../../assets/images/onboarding3.png")} 
     style={{ marginHorizontal: "5%",width: "90%" }}
    />
    </View>
  </View>
  )
}

export default Order

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