import { View, Image, Text ,Dimensions} from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RatingButton, RectButton, SellerButton } from "./Button";
import { SubInfo,   Catalogue, ProductTitle } from "./SubInfo";
import { router } from "expo-router";

const ProductCard = ({ data }) => {
  const cardWidth = (Dimensions.get("window").width / 2) - 15;

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
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
        <SellerButton  left={5} top={5} />
      </View>
      <View style={{ zIndex: 2, justifyContent: 'center', position: 'absolute', bottom: 60, left: 15 }}>
        <Text>{data.location}</Text>
      </View>
      <View
        style={{
          width: "100%",
          padding: SIZES.font,
        }}
      >
        <ProductTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Catalogue handlePress={() => {
            console.log('viewing catalogue')
          }} />
          <RectButton
            minWidth={50}
            fontSize={SIZES.font}
            handlePress={() => {
              router.push({ pathname: '/orderproduct', params: { value: data } })
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
