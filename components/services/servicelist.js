import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { useAuth } from '../../AuthContext/AuthContext';
import { baseUrl } from '../../constants/api/apiClient';
import axios from 'axios';

const ServiceList = () => {
  const [categories, setCategories] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category?type=Service`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const fetchedCategories = response.data.results;
        setCategories(fetchedCategories.slice(0, 8));
      } catch (error) {
        console.error('Error fetching categories:', error);
        console.log(error?.response?.data?.message);
      }
    };
    fetchCategories();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {categories.map((item, itemIndex) => (
        <View key={itemIndex} style={styles.itemContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.iconStyle}
            resizeMode="contain"
          />
          <Text style={styles.itemText}>{item.title}</Text>
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
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default ServiceList;
