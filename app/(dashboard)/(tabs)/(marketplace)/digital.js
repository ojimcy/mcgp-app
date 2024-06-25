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
        title: "Laundry Service",
        icon: require('../../../../assets/services/laundry.png')
      },
      {
        id: 2,
        title: "Makeup Artist",
        icon: require('../../../../assets/services/makeup.jpg')
      },
  {
    id: 3,
    title: "MCGP",
    icon: require('../../../../assets/digital/mcgp.png')
  },
  {
    id: 4,
    title: "Cake",
    icon: require('../../../../assets/services/cake.jpg')
  },
  {
    id: 5,
    title: "Graphic Design",
    icon: require('../../../../assets/services/graphic.jpg')
  },
  {
    id: 6,
    title: "Mechanics",
    icon: require('../../../../assets/services/mechanic.jpg')
  },
  {
    id: 7,
    title: "Hair Stylist",
    icon: require('../../../../assets/services/hair.png')
  },
  {
    id: 8,
    title: "Power Generator",
    icon: require('../../../../assets/services/generator.png')
  },
 
];

const digital = () => {
  return (
    <View style={{ flex: 1,backgroundColor:COLORS.white }}>
       <HeaderSearch />
      <ListCard itemList={favourites} itemValue='digital'/>
    </View>
  );
};

export default digital;

export const styles = StyleSheet.create({
 
});
