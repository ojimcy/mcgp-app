import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { router, useLocalSearchParams } from "expo-router";
import ProductCard from "../../components/designs/productcard";
import { useAuth } from "../../AuthContext/AuthContext";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";

const Products = () => {
  const { token } = useAuth();
  const { value } = useLocalSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const filteredData = products.filter((item) => item.category === value);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/adverts?type=Product`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const fetchProducts = response.data.results;
        setProducts(fetchProducts);
      } catch (error) {
        // alert(error?.response.data.message)
      } finally {
        setLoading(false);
      }
    };
    fetchedProducts();
  }, []);

  if (loading) {
    return (
      <GestureHandlerRootView style={styles.container}>
        <ActivityIndicator size={"large"} color="#0000ff" />
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      ) : (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>
            No registered available vendor merchant at the moment.
          </Text>
          <Text style={styles.subText}>
            Do you offer such product or service?
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/serviceaction",
                params: { index: 0 },
              });
            }}
            style={styles.registerLink}
          >
            <Text style={styles.registerLinkText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </GestureHandlerRootView>
  );
};

export default Products;

const styles = StyleSheet.create({
  noResultsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: "#555",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundText: {
    fontSize: 14,
  },
  subText: {
    fontSize: 14,
  },
  registerLink: {
    fontSize: 16,
    color: "#E8A14A",
    marginTop: 20,
  },
  registerLinkText: {
    fontSize: 16,
    color: "#E8A14A",
  },
});
