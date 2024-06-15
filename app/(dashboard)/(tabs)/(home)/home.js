import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from '../../../../screens/Home'
import { useAuth } from '../../../../AuthContext/AuthContext';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
  /* const {setToken,token}=useAuth();
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
  },[]) */
  return (
<HomeScreen/>
  )
}

export default Home

const styles = StyleSheet.create({})