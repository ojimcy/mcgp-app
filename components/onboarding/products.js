import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { NextBackOne, NextButton, SkipNextButton } from '../buttons/NextSkip'

const Products = ({navigation}) => {
    function handleNext(){
        navigation.navigate('Payment')
      }
      function handleSkip(){
        navigation.navigate('Login')
      }
    console.log(SIZES.height,SIZES.width)
  return (
    <View style={styles.container}>
      <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:25,top:122,position:'absolute'}}>Buy and Sell Your Product</Text>
      <View style={{ flexDirection: "row",width:SIZES.width }}>
      <Image source={require("../../assets/images/onboarding1.png")} 
       style={{ marginHorizontal: "5%",width: "95%" }}
      />
      </View>
      <View style={styles.back}>
    <SkipNextButton handleNext={handleNext} handleSkip={handleSkip}/>
    </View>
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
      paddingTop: 0,
      },
      back:{
        position:'absolute',
        bottom:10
      }
})