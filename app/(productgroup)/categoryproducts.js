import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getAdverts } from "../../constants/api/AuthenticationService";
import ProductCard from "../../components/designs/productcard";


const Products = () => {
  const { value } = useLocalSearchParams();
  const [products, setProducts] = useState([]);
  const filteredData = products.filter((item) => item.category === value);
  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await getAdverts("Product");
        if(response.status===401){
        return router.push('/login')
        } 
        const fetchProducts = response.data.results;
        setProducts(fetchProducts);
       
      } catch (error) {
        return router.push('/login')
      }
    };
    fetchedProducts();
  }, []);

  return (
    <View style={styles.container}>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
           <ProductCard data={item}/>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            No Product found for this category.
          </Text>
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
});
