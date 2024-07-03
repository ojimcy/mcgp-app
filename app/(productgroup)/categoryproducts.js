import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import ProductCard from "../../components/designs/productcard";
import { useAuth } from "../../AuthContext/AuthContext";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";
import { COLORS } from "../../constants";

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
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
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
            No registered avaliable vendor merchant at the moment.
          </Text>
          <Text style={styles.subText}>
            Do you offer such product or service?
          </Text>
          <Link href="/register" style={styles.registerLink}>
            Register
          </Link>
        </View>
      )}
    </View>
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
});
