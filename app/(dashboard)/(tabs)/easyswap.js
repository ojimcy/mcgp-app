import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
const easyswap = () => {
  useEffect(() => {});
  return (
    <View
      style={{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ padding: 10, fontSize: 16, fontWeight: "600" }}>
        Easy Swap Coming soon
      </Text>
    </View>
  );
};

export default easyswap;

const styles = StyleSheet.create({});
