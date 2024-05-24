import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

// Example Data
const categories = [
 
      { title: 'Home cleaning services', icon: require('../../assets/services/homeservice.png') },
      { title: 'Laundry services', icon: require('../../assets/services/laundry.png') },
      { title: 'Event services', icon: require('../../assets/services/event.png') },
      { title: 'Catering services', icon: require('../../assets/services/catering.png') },
      { title: 'Spar services', icon: require('../../assets/services/spar.png') },
      { title: 'Hair stylist', icon: require('../../assets/services/hair.png') },
      { title: 'Transport system services', icon: require('../../assets/services/truck.png') }
    ];

const ServiceList = () => {
  return (
    <ScrollView style={styles.container}>
         {categories.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.itemContainer}>
              <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'/>
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
