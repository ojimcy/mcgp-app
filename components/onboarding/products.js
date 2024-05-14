import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'

const Products = () => {
    console.log(SIZES.height,SIZES.width)
  return (
    <View style={styles.container}>
      <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:18}}>Buy and Sell Your Product</Text>
      <View style={{ flexDirection: "row" }}>
      <Image source={require("../../assets/images/onboarding1.png")} 
       style={{ marginHorizontal: "5%",width: "90%" }}
      />
      </View>
    </View>
  )
}

export default Products

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