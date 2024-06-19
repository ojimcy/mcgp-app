import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import { useAuth } from '../../AuthContext/AuthContext';
import { COLORS } from '../../constants';
import { router } from 'expo-router';
//import { items } from './data';

const Cart = () => {
    const {items,setItems, removeItem }=useAuth()
 // const [cartItems, setCartItems] = useState(items);

  const handleAdd = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleSubtract = (id) => {
    const updatedItems = items.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₦{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleSubtract(item.id)} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleAdd(item.id)} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₦{calculateTotal()}</Text>
      </View>
      <View style={styles.checkoutContainer}>
      <Button title="Proceed" onPress={() =>router.push('/orderproduct')} color={COLORS.primary} />
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  totalContainer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  checkoutContainer: {
    paddingVertical: 10,
    borderTopWidth: 1,
 marginBottom:20
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Cart;
