import { View, Image, Text, Dimensions, Pressable, Alert } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RatingButton, RectButton, SellerButton } from "./Button";
import { Catalogue, ProductTitle } from "./SubInfo";
import { router } from "expo-router";
import { useAuth } from "../../AuthContext/AuthContext";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";

const ProductCard = ({ data }) => {
  const { items, token, setItems} = useAuth();
  const cardWidth = Dimensions.get("window").width / 2 - 15;
  const addItem = async (newItem) => {
    try {
      const response = await axios.post(`${baseUrl}/cart`, newItem, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.status);
      if (response.status === 201) {
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  function checkItemExist(name) {
    const existingItem = items.find((item) => item.name === name);
    if (existingItem) {
      return true;
    }
    return false;
  }
  const getItems = async () => {
    try {
      const response = await axios.get(`${baseUrl}/cart`, {
        headers: {
          Authorization: `${token}`
        },
      });
      console.log('checking responses',response.status)
      if (response.status === 200) {
        setItems(response.data)
      return;
      }else{
        return;
      }
    } catch (error) {
      console.log( error.response?.data?.message)
      return ;
    }
  };
  useEffect(()=>{
    getItems()
  },[])
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderTopEndRadius: SIZES.font,
        marginBottom: SIZES.base,
        marginHorizontal: 5,
        width: cardWidth,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 150,
        }}
      >
        <Pressable
          onPress={() => {
            console.log("cliked!");
            router.push({
              pathname: "/productdetails",
              params: { image: data.images[1],companyName:data.companyName,title:data.name,description:data.description,location:data.location,price:data.price,phone:data.phoneNumber },
            });
          }}
        >
          <Image
            source={{ uri: data.images[0] }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
          <RatingButton right={5} top={5} />
          <CircleButton imgUrl={assets.heart} right={5} bottom={5} />
          <SellerButton left={5} top={5} />
        </Pressable>
      </View>

      <View
        style={{
          width: "100%",
          padding: SIZES.base,
        }}
      >
        <ProductTitle
          title={data.name}
          companyName={data.companyName}
          titleSize={SIZES.small}
        />
        <View style={{ zIndex: 2, flexDirection: "row", marginTop: 5 }}>
          <Image source={assets.location} resizeMode="contain" />
          <Text style={{ paddingLeft: 5, fontSize: 11, fontWeight: "500" }}>
            {data.location}
          </Text>
        </View>
        <View style={{ zIndex: 2, flexDirection: "row", marginTop: 5 }}>
          <Text
            style={{
              paddingLeft: 5,
              fontSize: 11,
              fontWeight: "500",
              color: COLORS.primary,
            }}
          >
            {data.price}K
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Catalogue
            handlePress={() => {
              console.log("viewing catalogue");
            }}
          />
          {!checkItemExist(data.name) ? (
            <RectButton
              minWidth={50}
              fontSize={10}
              title="Add to cart"
              handlePress={async () => {
                if (data.name && data.price && data.images[0]) {
                  const existingItem = items.find(
                    (item) => item.name === data.name
                  );
                  if (existingItem) {
                    return Alert.alert(
                      "Item already in cart",
                      "You have added this item to the cart. Proceed to add the quantity from the cart if you wish."
                    );
                  }
                  const newItem = {
                    productId: data.id, // unique id
                    /*  name:data.name,
                  price: parseFloat(data.price),
                  image:data.images[0], */
                    quantity: 1,
                  };
                  const response = await addItem(newItem);
             const result= await getItems();
                  /*  const result=await addItem(newItem);
           console.log(result) */
                }
              }}
            />
          ) : (
            <RectButton
              minWidth={50}
              fontSize={10}
              fontWeight="700"
              color="white"
              title="Checkout"
              handlePress={() => {
                router.push("/cart");
              }}
            />
          )}
        </View>
        {/* <View>
          <Pressable onPress={()=>{
          router.push('/cart')  
          }}>
            <Text>Proceed to cart</Text>
          </Pressable>
        </View> */}
      </View>
    </View>
  );
};

export default ProductCard;
