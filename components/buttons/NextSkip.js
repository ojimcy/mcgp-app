import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import  { ProgressFour, ProgressOne, ProgressThree, ProgressTwo } from './Progress'
import { COLORS, SIZES } from '../../constants/theme'

export const NextBackOne = ({handleNext,handleSkip}) => {
  return (
    <View>
    <View style={styles.button}>
     <TouchableOpacity  onPress={handleNext}><Text>Next</Text></TouchableOpacity> 
    </View>
    <TouchableOpacity onPress={handleSkip}><Text>Skip</Text></TouchableOpacity>
    </View>
  )
}
export const NextBackTwo = ({handleNext,handleSkip}) => {
  return (
    <View style={{marginTop:75,flexDirection:'row',justifyContent:'space-between',bottom:'1%'}}>
     <TouchableOpacity onPress={handleSkip}><Text style={{paddingLeft:40}}>Skip</Text></TouchableOpacity>
     <ProgressTwo/>
     <TouchableOpacity onPress={handleNext}><Text  style={{paddingRight:40}}>Next</Text></TouchableOpacity> 
    </View>
  )
}
export const NextBackThree = ({handleNext,handleSkip}) => {
  return (
    <View style={{marginTop:75,flexDirection:'row',justifyContent:'space-between',bottom:'1%'}}>
     <TouchableOpacity onPress={handleSkip}><Text style={{paddingLeft:40}}>Skip</Text></TouchableOpacity>
     <ProgressThree/>
     <TouchableOpacity onPress={handleNext}><Text  style={{paddingRight:40}}>Next</Text></TouchableOpacity> 
    </View>
  )
}
export const NextBackFour = ({handleNext,handleSkip}) => {
  return (
    <View style={{marginTop:75,flexDirection:'row',justifyContent:'space-between',bottom:'1%'}}>
     <TouchableOpacity onPress={handleSkip}><Text style={{paddingLeft:40}}>Skip</Text></TouchableOpacity>
     <ProgressFour/>
     <TouchableOpacity onPress={handleNext}><Text  style={{paddingRight:40}}>Next</Text></TouchableOpacity> 
    </View>
  )
}

export function SkipNextButton({handleNext,handleSkip,index}){
    return(
    <View style={styles.container}>
        <ProgressOne index={index}/>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      {index!=3 && <TouchableOpacity onPress={handleSkip}  style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>}
      
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
       /*  backgroundColor: '#fff', */
        alignItems: 'center',
        justifyContent: 'center',
        width:SIZES.width,
   
      },
      nextButton:{
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginVertical: SIZES.height*(0.026824),
        height:SIZES.height*(0.068),
        borderBlockColor:COLORS.primary
      },
      skipButton:{
      },
      nextButtonText: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight:'medium',
        justifyContent: 'center',
        alignItems:'center',
      
    },
   skipButtonText: {
        color: COLORS.primary,
        fontSize: 15,
        fontWeight: 'medium',
        justifyContent: 'center',
        alignItems:'center'
    }
})
