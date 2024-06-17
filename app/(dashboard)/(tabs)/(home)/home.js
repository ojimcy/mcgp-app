import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from '../../../../screens/Home'
import { useAuth } from '../../../../AuthContext/AuthContext';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from '../../../../nft/Home';


const Home = () => {
  
  return (
    <>
<HomeScreen/>
{/* <HomePage/> */}
</>
  )
}

export default Home

const styles = StyleSheet.create({})