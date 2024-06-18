import { View, Text, Image } from "react-native";
import React from "react";
import { SIZES, SHADOWS, assets} from "../constants";
import {COLORS } from "../../constants";

export const ProductTitle = ({ title, titleSize, companyName, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
      {companyName}'s {title}
      </Text>
    </View>
  );
};

export const Catalogue = ({ handlePress }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
      onPress={handlePress}
        style={{
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        see catalogue
      </Text>
    </View>
  );
};
export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <View>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};
export const People = () => {
  const personsArray = [
    assets.person01,
    assets.person02,
    assets.person03,
    assets.person04,
  ];
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {personsArray.map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  );
};
export const Price = ({price}) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontSize: SIZES.small,
          color: COLORS.black,
        }}
      >
        Amount in NGN
      </Text>
      <Text
        style={{
          fontSize: SIZES.l,
          color: COLORS.black,
          fontWeight:'600'
        }}
      >
         ₦{price}
      </Text>
    </View>
  );
};
export const SubInfo = ({price}) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <Price price={price} />
    </View>
  );
};
