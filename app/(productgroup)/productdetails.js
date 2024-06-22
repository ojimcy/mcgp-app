import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import ProductDetail from '../../components/products/productdetail'

const ProductDetails = () => {
  const data=useLocalSearchParams();
  return (
    <View>
      {data &&
      <ProductDetail 
    item={data}
     />}
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})