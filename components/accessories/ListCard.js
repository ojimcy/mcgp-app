import React, { useContext, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { Link, router } from 'expo-router';
import { AppContext } from '../../AuthContext/AuthContext';

// Example Data
const ListCard = ({itemList,itemValue}) => {
 const {setCategory}=useContext(AppContext);
 const [isDisabled, setIsDisabled] = useState(false);
  return (
    <ScrollView style={styles.container}>
          {itemList.map((item, itemIndex) => (
             <Pressable onPress={()=>{
              console.log(itemValue)
              if(itemValue==='digital'){
                return alert('coming soon')
              }
              if (!isDisabled) {
                setIsDisabled(true);
                // Your logic here when TouchableOpacity is pressed
                setCategory(item.title)
                router.push({ pathname: `/${itemValue}`, params: { value: item.id } });
                // Enable TouchableOpacity after a delay (e.g., 1 second)
                setTimeout(() => {
                  setIsDisabled(false);
                }, 2000); // 1000 milliseconds = 1 second
              }
             
            }} key={itemIndex}  disabled={isDisabled}>
            <View  style={styles.itemContainer}>
              <Image source={{uri:item.image}} style={styles.iconStyle} resizeMode='contain'/>
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
    marginRight: 5,
    borderRadius:60
  },
  itemText: {
    fontSize: 16,
  }
});

export default ListCard;
