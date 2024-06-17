import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Stack } from "expo-router";
import { AppContext } from '../../AuthContext/AuthContext';
const Layout = () => {
    const {category}=useContext(AppContext)
  return (
    <Stack>
      <Stack.Screen
        name="categoryproducts"
        options={{
          headerTitle: `${category} Products`,
        }}
      />
      <Stack.Screen
        name="orderproduct"
        options={{
          headerTitle: `Order Product`,
        }}
      />
      </Stack>
  )
}

export default Layout

const styles = StyleSheet.create({})