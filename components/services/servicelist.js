import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

// Example Data
const categories = [
  {
    title: '',
    items: [
      { name: 'home cleaning services', icon: require('../../assets/services/homeservice.png') },
      { name: 'laundry services', icon: require('../../assets/services/laundry.png') },
      { name: 'event services', icon: require('../../assets/services/event.png') }
    ],
  },
  {
    title: '',
    items: [
      { name: 'catering services', icon: require('../../assets/services/catering.png') },
      { name: 'spar services', icon: require('../../assets/services/spar.png') },
      { name: 'hair stylist', icon: require('../../assets/services/hair.png') }
    ],
  },
  {
    title: '',
    items: [
      { name: 'transport system services', icon: require('../../assets/services/truck.png') }
    ],
  }
];

const ServiceList = () => {
  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
         {category.title &&  <Text style={styles.categoryTitle}>{category.title}</Text>}   
          {category.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.itemContainer}>
              <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'/>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          ))}
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

export default ServiceList;
