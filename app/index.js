import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Products from '../components/onboarding/products'
import Cards from '../components/rne/Card'
import CardProduct from '../components/rne/CardProduct'

const Dashboard = () => {
  return (
    <View>
      <Products/>
    {/*   <Cards/> */}
{/* <CardProduct/> */}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})