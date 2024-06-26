import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Products from "../components/onboarding/products";
import { useAuth } from "../AuthContext/AuthContext";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiClient } from "../constants/api/apiClient";
const Dashboard = () => {
  const { setToken, token, setAuthenticated } = useAuth();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
        setAuthenticated(true);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = value;
          return config;
        });
      }
    } catch (e) {
      alert(e)
    }
  };
  useEffect(() => {
    getData();
    if (token) {
      router.push("/home");
    }
  }, [token]);

  return (
    <View>
      <Products />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
