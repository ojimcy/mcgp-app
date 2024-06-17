import { View, Image, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RatingButton, RectButton, SellerButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle, Catalogue } from "./SubInfo";

const NFTCard = ({ data }) => {

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
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
        <RatingButton  right={10} top={10} />
        <CircleButton imgUrl={assets.heart} right={10} bottom={25} />
        <SellerButton imgUrl={assets.heart} left={10} top={10} />
      </View>
      <SubInfo price={data.price} />
      <View
        style={{
          width: "100%",
          padding: SIZES.font,
        }}
      >
        <NFTTitle
          title={data.title}
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
          <Catalogue handlePress={()=>{
            console.log('viewing catalogue')
          }} />
          <RectButton
            minWidth={70}
            fontSize={SIZES.font}
            handlePress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
