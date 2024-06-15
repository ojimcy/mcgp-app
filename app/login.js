import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Login from '../components/onboarding/Login'
import { useAuth } from '../AuthContext/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const login = () => {
  const {setToken,token}=useAuth();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
   getData()
    if(token){
      router.push('/home')
        }
  },[])
  return (
    <Login/>
  )
}

export default login

const styles = StyleSheet.create({})