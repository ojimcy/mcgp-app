import { StyleSheet, View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TabButton from "../../../../components/marketplace/tab";
import { COLORS, SIZES } from "../../../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCard from "../../../../components/accessories/ListCard";
import HeaderSearch from "../../../../components/marketplace/header";
import { getCategories } from "../../../../constants/api/AuthenticationService";
const favourites = [
  {
    id: 1,
    title: "Graphic Design",
    icon: require('../../../../assets/services/graphic.jpg')
  },
  {
    id: 2,
    title: "Mechanics",
    icon: require('../../../../assets/services/mechanic.jpg')
  },
  {
    id: 3,
    title: "Hair Stylist",
    icon: require('../../../../assets/services/hair.png')
  },
  {
    id: 4,
    title: "MCGP",
    icon: require('../../../../assets/digital/mcgp.png')
  },
  {
    id: 5,
    title: "Cake",
    icon: require('../../../../assets/services/cake.jpg')
  },

  {
    id: 6,
    title: "Power Generator",
    icon: require('../../../../assets/services/generator.png')
  },
  {
    id: 7,
    title: "Laundry Service",
    icon: require('../../../../assets/services/laundry.png')
  },
  {
    id: 8,
    title: "Makeup Artist",
    icon: require('../../../../assets/services/makeup.jpg')
  },
];



const services = () => {
  const [categories,setCategories]=useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(); // Adjust the endpoint based on your API
        console.log(response.data.results)
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
