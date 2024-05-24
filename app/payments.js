import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Payments from '../components/onboarding/payments'
import * as NavigationBar from 'expo-navigation-bar';
const Payment = () => {
  useEffect(() => {
    // Hide the navigation bar
    NavigationBar.setVisibilityAsync('hidden');
  }, []);
  return (
    <Payments/>
  )
}

export default Payment

const styles = StyleSheet.create({})