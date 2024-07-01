import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const Card = ({ iconName, title, buttonTitle, imageUrl, header, ...props }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (buttonTitle === "Register / Trade") {
          router.push("/products");
        } else {
          alert("Coming Soon");
        }
      }}
      style={styles.content}
    >
      {iconName || imageUrl ? (
        <>
          {imageUrl ? (
            <Image
              source={imageUrl}
              /* style={{width:"90%"}} */ resizeMode="contain"
            />
          ) : (
            <MaterialIcons name={iconName} size={30} color={COLORS.primary} />
          )}
          <Text style={styles.textStyle}>{title}</Text>
        </>
      ) : (
        <>
          <Text style={styles.textStyleBold}>{header}</Text>
          <Text style={styles.textStyleBold}>{title}</Text>
        </>
      )}

      {buttonTitle && (
        <View style={[styles.innerButton, { ...props }]}>
          <Text style={{ fontWeight: 500, fontSize: 12, padding: 3 }}>
            {buttonTitle}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  content: {
    width: SIZES.width * 0.4534883, // Slightly rounded for clarity
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF", // Example background color for contrast
    padding: 10,
    marginTop: 5,
  },
  textStyle: {
    color: "black", // Ensuring text is also white for uniformity
    textAlign: "center", // Center text if it wraps in multiple lines
    marginTop: 8, // Space between the icon and the text
  },
  textStyleBold: {
    color: "black", // Ensuring text is also white for uniformity
    textAlign: "center", // Center text if it wraps in multiple lines
    marginTop: 8, // Space between the icon and the text
    fontSize: 14,
    fontWeight: "600",
  },
  innerButton: {
    borderRadius: 10,
    backgroundColor: COLORS.lightButton,
    padding: 5,
    margin: 5,
  },
});
