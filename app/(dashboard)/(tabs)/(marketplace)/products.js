import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, SIZES } from "../../../../constants";
import ListCard from "../../../../components/accessories/ListCard";
import HeaderSearch from "../../../../components/marketplace/header";
import { useAuth } from "../../../../AuthContext/AuthContext";
import axios from "axios";
import { baseUrl } from "../../../../constants/api/apiClient";
import { router } from "expo-router";
const products = () => {
  const [categories, setCategories] = useState([]);
  const { logOut, token } = useAuth();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category?type=Product`, {
          headers: {
            Authorization: `${token}`,
          },
        }); // Adjust the endpoint based on your API
        const fetchedCategories = response.data.results;
        setCategories(fetchedCategories);
      } catch (error) {
        alert('can not fetch Categories', error?.response.data.message);
        router.push("/login");
      }
    };
    if (token) {
      fetchCategories();
    }
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View>
        <HeaderSearch />
      </View>

      <ListCard itemList={categories} itemValue="categoryproducts" />
    </View>
  );
};

export default products;

export const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    height: SIZES.height * 0.06437768,
    width: SIZES.width * 0.906976744,
    backgroundColor: "#FFF4E8",
    justifyContent: "flex-start",
    marginHorizontal: SIZES.width * 0.0498,
    borderRadius: 40,
    alignItems: "center",
  },
});
