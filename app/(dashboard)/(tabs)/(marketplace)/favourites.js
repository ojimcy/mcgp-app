import React from "react";
import {View } from "react-native";
import { COLORS, SIZES } from "../../../../constants";
import HeaderSearch from "../../../../components/marketplace/header";
import ListCard from "../../../../components/accessories/ListCard";

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

const MarketPlace = () => {
  return (
    <View style={{ flex: 1 ,backgroundColor:COLORS.white}}>
      <HeaderSearch />
      <ListCard itemList={favourites} itemValue='favourites'/>
    </View>
  );
};

export default MarketPlace;
