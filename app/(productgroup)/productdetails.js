import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from '../../nft/Details'
import { useLocalSearchParams } from 'expo-router'

const ProductDetails = () => {
  const {data}=useLocalSearchParams();
  return (
    <View>
      <Details data={data}/>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})