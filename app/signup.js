import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Signup from '../components/onboarding/Signup'
import { useAuth } from '../AuthContext/AuthContext';
import { router } from 'expo-router';

const signup = () => {
  const {isAuthenticated}=useAuth();
  useEffect(()=>{
    if(isAuthenticated){
      router.push('/home')
        }
  },[])
  return (
    <Signup/>
  )
}

export default signup

const styles = StyleSheet.create({})