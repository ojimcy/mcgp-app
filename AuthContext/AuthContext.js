import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  executeJwtAuthentication,
  register,
} from "../constants/api/AuthenticationService";
import { apiClient } from "../constants/api/apiClient";
import { router } from "expo-router";

// Create the context
export const AppContext = createContext();
export const useAuth = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [appService, setAppService] = useState("");
  async function login(username, password) {
    try {
      const response = await executeJwtAuthentication(username, password);
      if (response.status === 200) {
        const jwtToken = "Bearer " + response.data.tokens.access.token;
        await AsyncStorage.setItem("token", jwtToken);
        setToken(jwtToken);
        setUsername(username);
        setAuthenticated(true);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
          config.headers["Content-Type"] = "multipart/form-data";
          return config;
        });
        return { success: true, error: false, message: "success" };
      } else {
        setLoading(false);
        await logOut();
        return { success: false, error: true, message: "could not create" };
      }
    } catch (error) {
      setLoading(false);
      await logOut();
      return {
        success: false,
        error: true,
        message: error.response?.data?.message,
      };
    }
  }

  async function signup(payLoad) {
    try {
      const response = await register(payLoad);
      if (response.status === 201) {
        const jwtToken = "Bearer " + response.data.tokens.access.token;
        setToken(jwtToken);
        setAuthenticated(true);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
          config.headers["Content-Type"] = "multipart/form-data";
          //config.headers.Accept = "application/json";
          return config;
        });
        return { success: true, error: false, message: "success" };
      } else {
        setLoading(false);
        return { success: false, error: true, message: "could not create" };
      }
    } catch (error) {
      setLoading(false);
      return {
        success: false,
        error: true,
        message: error.response?.data?.message,
      };
    } finally {
      setLoading(false);
    }
  }
  async function logOut() {
    setToken(null);
    setAuthenticated(false);
    setUsername(null);
    apiClient.interceptors.request.use((config) => {
      config.headers.Authorization = "";
      return config;
    });
    await AsyncStorage.removeItem('token');
    router.push('/login')
  }
  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        isAuthenticated,
        setAuthenticated,
        login,
        logOut,
        username,
        token,
        loading,
        setLoading,
        appService,
        setAppService,
        signup,
        setToken
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
