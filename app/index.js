import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Products from '../components/onboarding/products'
import ProductDetail from '../components/products/productdetail'
import Delivery from '../components/orders/delivery'

const Dashboard = () => {
  return (
    <View>
      {/* <Products/> */}
    {/*  <ProductDetail/> */}
     <Delivery/>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})