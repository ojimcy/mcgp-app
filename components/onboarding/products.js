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
      <View style={{top:SIZES.height*(0.1309),position:'absolute',alignContent:'center',alignItems:'center'}}>
      <Text style={{color:COLORS.primary,fontWeight:600,fontSize:30}}>Buy and sell your </Text>
     <Text style={{color:COLORS.primary,fontWeight:600,fontSize:30}}>Product</Text>  
      </View>
      
       
     
      <View style={{position:'absolute', alignContent:'center',height:SIZES.height*(0.448),width:SIZES.width*(0.972),top:SIZES.height*(0.298)}}>
      <Image source={require("../../assets/images/onboarding1.png")} 
       style={{ width: "100%",height:'100%' }}
      />
      </View>
      <View style={styles.back}>
    <SkipNextButton handleNext={handleNext} handleSkip={handleSkip} index={1}/>
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
        top:SIZES.height*(0.76)
      }
})