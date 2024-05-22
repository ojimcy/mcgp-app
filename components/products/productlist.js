import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

// Example Data
const categories = [
  {
    title: 'Electronics',
    items: [
      { name: 'Smart TV', icon: require('../../assets/products/tv.png') },
      { name: 'Smart Phone', icon: require('../../assets/products/phone.png') },
      { name: 'Generators', icon: require('../../assets/products/generator.png') }
    ],
  },
  {
    title: 'Accessories',
    items: [
      { name: 'Shoes', icon: require('../../assets/products/shoe.png') },
      { name: 'Wrist Watches', icon: require('../../assets/products/watch.png') }
    ],
  },
  {
    title: 'Cooperate Wear',
    items: [
      { name: 'Ladies Bags', icon: require('../../assets/products/wear.png') }
    ],
  }
];

const ProductList = () => {
  return (
    <ScrollView style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
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

export default ProductList;
