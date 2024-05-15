import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { SkipNextButton } from '../buttons/NextSkip'

const Payments = ({navigation}) => {
    function handleNext(){
        navigation.navigate('Order')
      }
      function handleSkip(){
        navigation.navigate('Login')
      }
  return (
    <View style={styles.container}>
    <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:25,top:71,position:'absolute'}}>Make Payments across, the borders</Text>
    <View style={{width:SIZES.width,position:'relative',justifyContent:'center',alignItems:'center',marginTop:20}}>
    <Image source={require("../../assets/images/onboarding2.png")} 
     style={{ marginHorizontal: "1%",width: "98%" }}
    />
    </View>
    <View style={styles.back}>
    <SkipNextButton handleNext={handleNext} handleSkip={handleSkip}/>
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
      back:{
        position:'absolute',
        bottom:10
      }
})