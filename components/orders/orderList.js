import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../../AuthContext/AuthContext";
import { COLORS } from "../../constants";
import { router } from "expo-router";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";
import OrderCard from "./ordercard";

const OrderList = () => {
  const { items, setItems, token } = useAuth();
  const [orders,setOrders]=useState();
  const handleAdd = async (id, payLoad) => {
    try {
      const response = await axios.post(
        `${baseUrl}/cart/${id}/increase`,
        payLoad,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const getItems = async () => {
    try {
      const response = await axios.get(`${baseUrl}/order/get-all`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      console.log('checking Ex',response.data.results)
      setItems(response.data.results)
      if (response.status === 200) {
        setOrders(response.data.results);
        return;
      } else {
        return;
      }
    } catch (error) {
      console.log(error.response?.data?.message);
      return;
    }
  };
  const handleRemoveCartItem = async (id) => {
    try {
      const response = await axios.post(`${baseUrl}/cart/${id}`, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  const handleSubtract = async (id, payLoad) => {
    try {
      const response = await axios.post(
        `${baseUrl}/cart/${id}/decrease`,
        payLoad,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const calculateTotal = () => {
   // return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  /* const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₦{item.amount}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={async () => {
              if (item.quantity > 1) {
                await handleSubtract(item.productId, { quantity: 1 });
                await getItems();
              } else {
                alert(
                  `you can't reduce again, you are at your limit, you can decide to remove the Item`
                );
              }
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={async () => {
              const response = await handleAdd(item.productId, { quantity: 1 });
              const result = await getItems();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={async () => {
          await handleRemoveCartItem(item.productId);
          await getItems();
        }}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  ); */

  return (
    <View style={styles.container}>
      <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <OrderCard order={item} />}
      contentContainerStyle={styles.container}
    />
      {/* <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₦{calculateTotal()}</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <Button
          title="Proceed"
          onPress={() =>
            router.push({
              pathname: "/orderproduct",
              params: { totalAmount: calculateTotal() },
            })
          }
          color={COLORS.primary}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   /*  flex: 1, */
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  list: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
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
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  totalContainer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  checkoutContainer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  removeButton: {
    backgroundColor: "#ff4444",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default OrderList;
