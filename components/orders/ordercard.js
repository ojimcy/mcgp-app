import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const orders = [
  // Your orders data here
];

const OrderCard = ({ order }) => {
    console.log(order)
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Order ID: {order.id}</Text>
      <Text style={styles.text}>Payment Status: {order.paymentStatus}</Text>
      <Text style={styles.text}>Delivery Address: {order.deliveryAddress.fullName}, {order.deliveryAddress.address}, {order.deliveryAddress.city}, {order.deliveryAddress.state}, {order.deliveryAddress.country}</Text>
      <Text style={styles.text}>Phone: {order.deliveryAddress.phoneNumber}</Text>
      <FlatList
        data={order.product}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productText}>Price: {item.price}</Text>
            <Text style={styles.productText}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};
/* 
const OrderList = () => {
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderCard order={item} />}
      contentContainerStyle={styles.container}
    />
  );
}; */

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productText: {
    fontSize: 14,
  },
});

export default OrderCard;
