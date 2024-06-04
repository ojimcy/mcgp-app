import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ProductCard from "../../components/accessories/ProductCard";
import ProductListing from "../../components/accessories/ProductListing";

const data = [
  {
    id: 1,
    title: "Car mechanics service",
    description: `Auto mechanics inspect cars, maintain vehicles and fix car problems to get them back on the road for safe operation for our clients.`,
    category: "Mechanics",
    image: require("../../assets/services/mechanic.jpg"),
  },
  {
    id: 2,
    title: "Catering service",
    description: `Our catering service is about preparing food and providing food services for clients at remote locations,such as hotels, restaurants, offices, concerts, and events.`,
    category: "Mechanics",
    image: require("../../assets/services/caterings.png"),
  },
  {
    id: 2,
    title: "Catering service",
    description: `Our catering service is about preparing food and providing food services for clients at remote locations,such as hotels, restaurants, offices, concerts, and events.`,
    category: "Mechanics",
    image: require("../../assets/services/caterings.png"),
  },
];
const Products = () => {
  const { value } = useLocalSearchParams();
  console.log(value);
  const filteredData = data.filter((item) => item.category === value);

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={styles.container}>
        {filteredData.length > 0 ? (
       filteredData.map((product, index) => (
        <ProductListing key={index} title={product.title} image={product.image} />
      ))
    ):(
      <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No services found for this category.</Text>
        </View> 
    )}
    </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: "#555",
  },
  container: {
    padding: 10,
    flexDirection:'row',
   alignContent:'space-between'
  },
});

