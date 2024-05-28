import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
const RootLayout = () => {
  useEffect(() => {
    async function configureNavigationBar() {
      // Set the navigation bar position to absolute
      await NavigationBar.setPositionAsync("absolute");

      // Set the navigation bar background color to transparent
      await NavigationBar.setBackgroundColorAsync("#fff");
    }

    configureNavigationBar();
  }, []);
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="payments"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="order"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(dashboard)"
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
