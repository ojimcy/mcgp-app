import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Details from '../../nft/Details'
import { useLocalSearchParams } from 'expo-router'
import ProductDetail from '../../components/products/productdetail'

const ProductDetails = () => {
  const {image,companyName,title,description,location,price,phone, attributes, reviews, averageRating}=useLocalSearchParams();
  console.log(image)
  return (
    <View>
     <ProductDetail image={image} 
     companyName={companyName} 
     title={title} 
     description={description}
     location={location}
     price={price}
     phone={phone}
     attributes={attributes}
     reviews={reviews}
     averageRating={averageRating}
     />
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})