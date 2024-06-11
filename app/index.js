import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Products from '../components/onboarding/products'
import ProductDetail from '../components/products/productdetail'
import Delivery from '../components/orders/delivery'
import PaymentType from '../components/orders/PaymentType'
import BankDetails from '../components/orders/bankdetails'
import CryptoDetails from '../components/orders/cryptodetails'

const Dashboard = () => {
  return (
    <View>
      <Products/>
    {/*  <Delivery/> */}
    {/*  <PaymentType/> */}
     {/* <BankDetails/> */}
     {/* <CryptoDetails/> */}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})