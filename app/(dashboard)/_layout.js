import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer'
import { COLORS } from '../../constants'
const Layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
            headerRight: () => (
              <Image
              source={require("../../assets/images/person01.png")}
              style={{ width: 30, height: 30, resizeMode:"contain",marginRight:10 }}
            />
            ), 
            headerTitle:'TSA CONNECT',
            title: 'Main Menu',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 16, // Reduce font size
                color: COLORS.primary, // Change font color
              },
          }}
      />
      </Drawer>
  )
}

export default Layout

const styles = StyleSheet.create({})