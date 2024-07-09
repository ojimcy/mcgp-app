import { TouchableOpacity, View, Text, Image } from "react-native";
import { SHADOWS, SIZES } from "../constants";
import { COLORS } from "../../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
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
        /*  style={{ width: 24, height: 24 }} */
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.lightButton,
        borderRadius: SIZES.medium,
        minWidth: minWidth,
        padding: SIZES.base,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: fontSize,
          /*  color: COLORS.black, */
          textAlign: "center",
          ...props,
        }}
      >
        {title}
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
      <Text style={{ padding: 5, fontSize: 11, fontWeight: "500" }}>
        Best seller
      </Text>
    </TouchableOpacity>
  );
};
export const RatingButton = ({ rating, handlePress, ...props }) => {
  console.log(rating);
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
      <Text style={{ padding: 5, fontSize: 14, fontWeight: "500" }}>
        {typeof rating === "number" ? (
          <Text style={{ padding: 10, color: COLORS.primary }}>*{rating}</Text>
        ) : (
          <Text style={{ padding: 10, color: COLORS.primary }}>* 4.7</Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};
