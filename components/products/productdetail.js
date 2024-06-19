import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const ProductDetail = ({ image,companyName,title,description,location,price,phone }) => {
  const [isMore,setIsMore]=useState(false);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: image }} // Replace with actual image URL
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {companyName}{"'s "}{title}
          </Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>📍 {location}</Text>
          <Text style={styles.rating}>4.7</Text>
          <Text style={styles.ratingCount}>500 rating</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.shipping}>10k shipping fee to Abuja</Text>
        </View>
        <View style={styles.productInfoContainer}>
          <Text style={styles.productInfoTitle}>Product Color</Text>
          <Text style={styles.productInfoValue}>White and Green</Text>
          <Text style={styles.productInfoTitle}>Call to place order</Text>
          <Text style={styles.productInfoValue}>{phone}</Text>
        </View>
        {!isMore&& <TouchableOpacity
        onPress={()=>setIsMore(true)}
        style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>View more</Text>
        </TouchableOpacity>}
        {isMore&&
          <>
          <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          {description}
           </Text>
          </>
        }
        
      </View>
      {isMore&& 
      <>
      <View style={styles.footer}>

        <Text style={styles.reviewTitle}>Verified customer Feedback</Text>
        <Text style={styles.reviewRating}>Product rating and review</Text>
        <Text style={styles.reviewScore}>4.7/5</Text>
        <Text style={styles.reviewCount}>500 rating so far</Text>
        <Text style={styles.reviewDate}>18/6/2024</Text>
        <Text style={styles.reviewAuthor}>Cynthia</Text>
      </View>
      <TouchableOpacity onPress={()=>setIsMore(false)} style={styles.viewLessButton}>
      <Text style={styles.viewMoreText}>View less</Text>
    </TouchableOpacity>
    </>
      }
     
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: COLORS.white,
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  location: {
    marginRight: 10,
  },
  rating: {
    marginRight: 10,
  },
  ratingCount: {
    color: 'gray',
  },
  priceContainer: {
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shipping: {
    color: 'gray',
  },
  productInfoContainer: {
    marginBottom: 20,
  },
  productInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productInfoValue: {
    fontSize: 16,
    marginBottom: 10,
  },
  viewMoreButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  viewLessButton: {
    alignItems: 'center',
    marginBottom: 50,
  },
  viewMoreText: {
    color: COLORS.primary,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: COLORS.lightGray,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewScore: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewCount: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewAuthor: {
    fontSize: 16,
  },
});

