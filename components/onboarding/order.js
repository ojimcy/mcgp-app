import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { SkipNextButton } from '../buttons/NextSkip'

const Order = ({navigation}) => {
    function handleNext(){
        navigation.navigate('Login')
      }
      function handleSkip(){
        navigation.navigate('Login')
      }
  return (
    <View style={styles.container}>
    <Text style={{color:COLORS.primary,fontWeight:'bold',fontSize:25,top:133,position:'absolute'}}>Order for Service,
    Anytime anywhere
    </Text>
    <View style={{ width:SIZES.width,position:'relative' }}>
    <Image source={require("../../assets/images/onboarding3.png")} 
     style={{ marginHorizontal: "2%",width: "96%" }}
    />
    </View>
    <View style={styles.back}>
    <SkipNextButton handleNext={handleNext} handleSkip={handleSkip}/>
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
      back:{
        position:'absolute',
        bottom:10
      }
})