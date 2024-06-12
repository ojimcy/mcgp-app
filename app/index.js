import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Products from '../components/onboarding/products'
import PhoneNumber from '../components/country/phoneNumber'

const Dashboard = () => {
  return (
    <View>
      <Products/>
    {/*  <PhoneNumber/> */}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})