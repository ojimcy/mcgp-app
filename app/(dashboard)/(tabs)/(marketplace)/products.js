import { StyleSheet, View, Text, TextInput } from "react-native";
import React,{useEffect,useState} from "react";

import { COLORS, SIZES } from "../../../../constants";
import ListCard from "../../../../components/accessories/ListCard";
import HeaderSearch from "../../../../components/marketplace/header";
import { getCategories } from "../../../../constants/api/AuthenticationService";
import { router } from "expo-router";
import { useAuth } from "../../../../AuthContext/AuthContext";
const products = () => {
  const [categories,setCategories]=useState([])
  const {logOut}=useAuth()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories('Products'); // Adjust the endpoint based on your API
        if(response.status===401){
         await logOut()
          } 
        const fetchedCategories = response.data.results;
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        console.log(error?.response?.data?.message)
        await logOut()
      }
    };
    fetchCategories();
  }, []);
  return (
    <View style={{ flex: 1,backgroundColor:COLORS.white }}>
     
      <View>
      <HeaderSearch />
      </View>
      
     
      <ListCard itemList={categories} itemValue='categoryproducts'/>
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
