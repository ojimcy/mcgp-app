import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AddCategory from "../../components/category/AddCategory";
import { useAuth } from "../../AuthContext/AuthContext";
import { router } from "expo-router";
import withAuth from "../../utils/WithAuth";

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
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      {currentUser && currentUser.role === "admin" ? (
        <AddCategory />
      ) : (
        <Text>You are not permitted for this task</Text>
      )}
    </View>
  );
};

export default withAuth(addcategory);

const styles = StyleSheet.create({});
