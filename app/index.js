import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Products from "../components/onboarding/products";
import { useAuth } from "../AuthContext/AuthContext";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiClient, baseUrl } from "../constants/api/apiClient";
import axios from "axios";
const Dashboard = () => {
  const { setToken, token, setAuthenticated } = useAuth();
  const [initialized, setInitialized] = useState(false);
  const getData = async () => {
    if (initialized) return;
    setInitialized(true);
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
        setAuthenticated(true);
        await fetchCategories(value);
      }
    } catch (e) {
      alert(e);
    }
  };
  const fetchCategories = async (token) => {
    try {
      const response = await axios.get(`${baseUrl}/category?type=Product`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      router.push("/home");
    } catch (error) {
      if (error?.response.data.message === "Please authenticate") {
        await AsyncStorage.removeItem("token");
      }
    }
  };

  useEffect(() => {
    getData();
  }, [token]);

  return (
    <View>
      <Products />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
