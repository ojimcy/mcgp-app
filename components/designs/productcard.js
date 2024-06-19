import { View, Image, Text, Dimensions, Pressable, Alert } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RatingButton, RectButton, SellerButton } from "./Button";
import { Catalogue, ProductTitle } from "./SubInfo";
import { router } from "expo-router";
import { useAuth } from "../../AuthContext/AuthContext";

const ProductCard = ({ data }) => {
  const {addItem,items}=useAuth()
  const cardWidth = Dimensions.get("window").width / 2 - 15;
  function checkItemExist(id){
    const existingItem = items.find(item => item.id === id);
    if(existingItem){
      return true;
    }
    return false
  }
 
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
            router.push({pathname:'/productdetails',params:{item:data}})
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
          {!checkItemExist(data.id) ?<RectButton
            minWidth={50}
            fontSize={10}
            title='Add to cart'
            handlePress={() => {
              if (data.name && data.price && data.images[0]) {
                const existingItem = items.find(item => item.name === data.name);
                if (existingItem) {
                return  Alert.alert('Item already in cart', 'You have added this item to the cart. Proceed to add the quantity from the cart if you wish.');
                }
                const newItem = {
                  id:data.id, // unique id
                  name:data.name,
                  price: parseFloat(data.price),
                  image:data.images[0],
                  quantity: 1,
                };

                addItem(newItem);
              }
            }}
          />:<RectButton
          minWidth={50}
          fontSize={10}
          fontWeight='700'
          color='white'
          title='Checkout'
          handlePress={() => {
            router.push('/cart')
          }}
        />}
          
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
