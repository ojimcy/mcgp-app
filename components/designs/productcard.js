import { View, Image, Text, Dimensions, Pressable, Alert } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RatingButton, RectButton, SellerButton } from "./Button";
import { Catalogue, ProductTitle } from "./SubInfo";
import { router } from "expo-router";
import { useAuth } from "../../AuthContext/AuthContext";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";

const ProductCard = ({ item }) => {
  const { items, token, setItems } = useAuth();
  const cardWidth = Dimensions.get("window").width / 2 - 15;
  const addItem = async (newItem) => {
    try {
      const response = await axios.post(`${baseUrl}/cart`, newItem, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
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
          Authorization: `${token}`,
        },
      });
      if (response.status === 200) {
        setItems(response.data);
        return;
      } else {
        return;
      }
    } catch (error) {
      return;
    }
  };
  useEffect(() => {
    getItems();
  }, []);
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
            router.push({
              pathname: "/productdetails",
              params: item,
            });
          }}
        >
          <Image
            source={{ uri: item.images[0] }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          />
          <RatingButton right={5} top={5} rating={item.averageRating} />
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
          title={item.name}
          companyName={item.companyName}
          titleSize={SIZES.small}
        />
        <View style={{ zIndex: 2, flexDirection: "row", marginTop: 5 }}>
          <Image source={assets.location} resizeMode="contain" />
          <Text style={{ paddingLeft: 5, fontSize: 11, fontWeight: "500" }}>
            {item.location}
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
            {item.price}K
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Catalogue handlePress={() => {}} />
          {!checkItemExist(item.name) ? (
            <RectButton
              minWidth={50}
              fontSize={10}
              title="Add to cart"
              handlePress={async () => {
                if (item.name && item.price && item.images[0]) {
                  const newItem = {
                    productId: item.id, // unique id
                    quantity: 1,
                  };
                  const response = await addItem(newItem);
                  const result = await getItems();
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
