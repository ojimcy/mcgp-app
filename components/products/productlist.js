import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { useAuth } from '../../AuthContext/AuthContext';
import { baseUrl } from '../../constants/api/apiClient';
import axios from 'axios';


const ProductList = () => {
  const [categories,setCategories]=useState([])
  const {logOut,token}=useAuth()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category?isParent=true&isFeatured=true`,{
          headers: {
            Authorization: `${token}`,
          },
        })
     console.log('From Product List',response.data)
        /*   if(response.status===401){
         await logOut()
          }  */
        const fetchedCategories = response.data.results;
        setCategories(fetchedCategories);
      } catch (error) {
       console.log('Error From Product List',error?.response.data.message)
      }
    };
    fetchCategories();
  }, []);
  return (
    <ScrollView style={styles.container}>
      { categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          {category.parentCategory ?  category.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.itemContainer}>
              <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'/>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )):undefined}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  categoryContainer: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderColor:COLORS.gray,
    borderBottomWidth:0.5
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  }
});

export default ProductList;
