import { StyleSheet, View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TabButton from "../../../../components/marketplace/tab";
import { COLORS, SIZES } from "../../../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCard from "../../../../components/accessories/ListCard";
import HeaderSearch from "../../../../components/marketplace/header";
import { getCategories } from "../../../../constants/api/AuthenticationService";

const services = () => {
  const [categories,setCategories]=useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories('Services'); // Adjust the endpoint based on your API
        const fetchedCategories = response.data.results;
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        console.log(error?.response?.data?.message)
      }
    };
    fetchCategories();
  }, []);
  return (
    <View style={{ flex: 1,backgroundColor:COLORS.white }}>
       <HeaderSearch />
     <ListCard itemList={categories} itemValue='categoryservice'/>
    </View>
  );
};

export default services;

export const styles = StyleSheet.create({
});
