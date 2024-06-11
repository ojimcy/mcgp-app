import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons

const images = [
  "https://img.us.news.samsung.com/us/wp-content/uploads/2023/03/14124128/SM-A546_Galaxy-A54-5G_Awesome-Violet_Front.png", // Replace these with actual image URLs
  "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a13-1.jpg",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmhm.vn%2Fproducts%2Fsamsung-galaxy-a13-phan-phoi-chinh-hang&psig=AOvVaw2t9f0iZ3Z5y5Bvp-J0HOc9&ust=1718119820234000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKicvtqt0YYDFQAAAAAdAAAAABAS",
  "https://cdn.idealo.com/folder/Product/201744/5/201744551/s3_produktbild_gross_3/samsung-galaxy-a13-5g.jpg",
  "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a13-1.jpg",
];

const ProductDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.iconContainer}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: images[currentIndex] }}
          style={styles.productImage}
        />
        <TouchableOpacity onPress={handleNext} style={styles.iconContainer}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.label}>Product Name</Text>
        <Text style={styles.value}>Samsung S21 Ultra + 5G</Text>

        <Text style={styles.label}>Product Location</Text>
        <Text style={styles.value}>Abuja, Nigeria</Text>

        <Text style={styles.label}>Valid Contact</Text>
        <Text style={styles.value}>+2349063090719</Text>

        <Text style={styles.label}>Valid Email</Text>
        <Text style={styles.value}>Nzubechi389@gmail.com</Text>

        <Text style={styles.label}>Price</Text>
        <Text style={styles.value}>₦500,000</Text>

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.approveButton}>
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
  },
  productImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  productInfo: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  approveButton: {
    flex: 1,
    backgroundColor: "#5cb85c",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: "#d9534f",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProductDetail;
