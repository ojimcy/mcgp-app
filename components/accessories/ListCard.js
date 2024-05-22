import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

// Example Data
const ListCard = ({itemList}) => {
  return (
    <ScrollView style={styles.container}>
          {itemList.map((item, itemIndex) => (
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderColor:COLORS.gray,
    borderBottomWidth:0.5,
    height:SIZES.height*(0.07081545),
    backgroundColor: '#FFF4E8',
  },
  iconStyle: {
    width: 50,
    height: '90%',
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  }
});

export default ListCard;
