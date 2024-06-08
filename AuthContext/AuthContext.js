import React, { createContext, useContext, useState } from "react";
import {
  executeJwtAuthentication,
  register,
} from "../constants/api/AuthenticationService";
import { apiClient } from "../constants/api/apiClient";

// Create the context
export const AppContext = createContext();
export const useAuth = () => useContext(AppContext);
// Create a provider component
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
        setToken(jwtToken);
        setUsername(username);
        setAuthenticated(true);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
         config.headers["Content-Type"] = "multipart/form-data";
          return config;
        });
        return true;
      } else {
        setLoading(false);
        logOut();
        return false;
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      logOut();
      return false;
    }
  }

  async function signup(payLoad) {
    try {
      const response = await register(payLoad);
      if (response.status === 201) {
        console.log(response.status);
        const jwtToken = "Bearer " + response.data.tokens.access.token;
        setToken(jwtToken);
        setAuthenticated(true);
        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = jwtToken;
          config.headers["Content-Type"] = "multipart/form-data";
          //config.headers.Accept = "application/json";
          return config;
        });
        return true;
      } else {
        setLoading(false);
        return false;
      }
    } catch (error) {
      alert(error.response?.data?.message);
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  function logOut() {
    setToken(null);
    setAuthenticated(false);
    setUsername(null);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
