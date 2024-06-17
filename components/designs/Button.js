import { TouchableOpacity, View, Text, Image } from "react-native";
import { SHADOWS, SIZES } from "../constants";
import { COLORS } from "../../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.lightButton,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: fontSize,
                  color: COLORS.black,
          textAlign:"center"
        }}
      >
       Buy
      </Text>
    </TouchableOpacity>
  );
};

export const SellerButton = ({ handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.base,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{padding:5,fontSize:14,fontWeight:'500'}}>Best seller</Text>
    </TouchableOpacity>
  );
};
export const RatingButton = ({rating,handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.base,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text style={{padding:5,fontSize:14,fontWeight:'500'}}>{rating?rating:<Text style={{padding:10,color:COLORS.primary}}>* 4.7</Text>}</Text>
    </TouchableOpacity>
  );
};