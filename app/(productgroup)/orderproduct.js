import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Delivery from '../../components/orders/delivery'
import { useLocalSearchParams } from 'expo-router';

const orderproduct = () => {
  const {title} = useLocalSearchParams();
  return (
    <Delivery data={title}/>
  )
}

export default orderproduct

const styles = StyleSheet.create({})