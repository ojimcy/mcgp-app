import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PaymentSelection from '../../components/orders/PaymentType'
import { useLocalSearchParams } from 'expo-router'

const PaymentTypeScren = () => {
    const address=useLocalSearchParams();

  return (
    <View>
    <PaymentSelection address={address}/>
    </View>
  )
}

export default PaymentTypeScren

const styles = StyleSheet.create({})