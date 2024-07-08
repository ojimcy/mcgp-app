import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AddCategory from "../../components/category/AddCategory";
import { useAuth } from "../../AuthContext/AuthContext";
import { router } from "expo-router";

const addcategory = () => {
  const { currentUser } = useAuth();
  function checkAccess() {
    if (currentUser.role !== "admin") {
      console.log(currentUser);
      alert("You are not authorise for this task");
      return router.push("/home");
    }
  }
  useEffect(() => {
    if (currentUser) {
      checkAccess();
    }
  }, []);
  return (
    <View>
      {currentUser && currentUser.role === "admin" ? (
        <AddCategory />
      ) : undefined}
    </View>
  );
};

export default addcategory;

const styles = StyleSheet.create({});
