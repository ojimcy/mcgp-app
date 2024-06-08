import { View, Text } from 'react-native'
import React from 'react'
import Verify from '../components/onboarding/Verify'
import { useLocalSearchParams } from 'expo-router'

const VerifySignup = () => {
    const payLoad=useLocalSearchParams();
    console.log(payLoad)
  return (
<Verify payLoad={payLoad}/> 
  )
}

export default VerifySignup