import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import ProductDetail from '../../components/products/productdetail'

const ProductDetails = () => {
  //const {image,companyName,title,description,location,price,phone}=useLocalSearchParams();
  const data=useLocalSearchParams();
  console.log('my checks',data)
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