import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Link, router } from 'expo-router';
import { AppContext } from '../../AuthContext/AuthContext';

// Example Data
const ListCard = ({itemList,itemValue}) => {
 const {setCategory}=useContext(AppContext);
  return (
    <ScrollView style={styles.container}>
          {itemList.map((item, itemIndex) => (
             <Pressable onPress={()=>{
              setCategory(item.title)
              router.push({ pathname: `/${itemValue}`, params: { value: item.title } });
            }} key={itemIndex}>
            <View  style={styles.itemContainer}>
             
              <Image source={item.icon} style={styles.iconStyle} resizeMode='contain'/>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
            </Pressable>
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
    width: 40,
    height: '96%',
    marginRight: 10,
    borderRadius:60
  },
  itemText: {
    fontSize: 16,
  }
});

export default ListCard;
