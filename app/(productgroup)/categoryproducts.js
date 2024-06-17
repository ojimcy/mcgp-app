import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import CardProduct from "../../components/rne/CardProduct";
import { getAdverts } from "../../constants/api/AuthenticationService";
import { NFTCard } from "../../components/designs";

const Products = () => {
  const { value } = useLocalSearchParams();
  console.log(value);
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
        console.error("Error fetching categories:", error);
        console.log(error?.response?.data?.message);
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
           /*  <CardProduct item={item} /> */
           <NFTCard data={item}/>
          )}
          keyExtractor={(item) => item.id}
        /*   numColumns={2} */
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
