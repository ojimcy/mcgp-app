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
import CardProduct from "../../components/rne/CardProduct";

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
    <View style={styles.container}>
      {filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <CardProduct title={item.title} image={item.image} />
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
   flex:1,
   alignItems:'center'
  },
});
