import { View, Text } from "react-native";
import React from "react";
import Dots from "./Dots";
import { COLORS } from "../../constants/theme";

export const ProgressOne = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          width: 14,
          height: 14,
          borderRadius: 50 / 2,
          margin: 5,
          marginTop: 3,
          
        }}
      ></View>
      <Dots />
      <Dots />
    </View>
  );
};
export const ProgressTwo = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
      <Dots />
      <View
        style={{
          backgroundColor:  COLORS.primary,
          width: 14,
          height: 14,
          borderRadius: 50 / 2,
          margin: 5,
          marginTop: 3,
        }}
      ></View>
      <Dots />
    </View>
  );
};
export const ProgressThree = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
      <Dots />
      <Dots />
      <View
        style={{
          backgroundColor:  COLORS.primary,
          width: 14,
          height: 14,
          borderRadius: 50 / 2,
          margin: 5,
          marginTop: 3,
        }}
      ></View>
      <Dots />
    </View>
  );
};
export const ProgressFour = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
      <Dots />
      <Dots />
      <Dots />
      <View
        style={{
          backgroundColor:  COLORS.primary,
          width: 14,
          height: 14,
          borderRadius: 50 / 2,
          margin: 5,
          marginTop: 3,
        }}
      ></View>
    </View>
  );
};
