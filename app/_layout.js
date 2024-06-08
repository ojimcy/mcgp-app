
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import { AppProvider } from "../AuthContext/AuthContext";
import Toast from 'react-native-toast-message';
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
    <AppProvider>
     <StatusBar barStyle="dark-content" backgroundColor="#fff" />
     <Toast />
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
        name="recovery"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="verify"
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="(servicegroup)"
       
      />
       <Stack.Screen
        name="(productgroup)"
      />
      <Stack.Screen
        name="(dashboard)"

      />
    </Stack>
    </AppProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
