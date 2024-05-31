import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import TabButton from "../../../../components/marketplace/tab";
import { COLORS, SIZES } from "../../../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListCard from "../../../../components/accessories/ListCard";
import HeaderSearch from "../../../../components/marketplace/header";
const favourites = [
  {
    id: 1,
    title: "MCGP",
    icon: require('../../../../assets/digital/mcgp.png')
  },
  {
    id: 2,
    title: "Cake",
    icon: require('../../../../assets/services/cake.jpg')
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: require('../../../../assets/services/graphic.jpg')
  },
  {
    id: 4,
    title: "Mechanics",
    icon: require('../../../../assets/services/mechanic.jpg')
  },
  {
    id: 5,
    title: "Hair Stylist",
    icon: require('../../../../assets/services/hair.png')
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

const products = () => {
  return (
    <View style={{ flex: 1,backgroundColor:COLORS.white }}>
     
      <View>
      <HeaderSearch />
      </View>
      
     
      <ListCard itemList={favourites} itemValue='categoryproducts'/>
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
