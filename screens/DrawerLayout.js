import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
  return (
 <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer>
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Tsa connect',
          title: 'Tsa Connect',
        }}
      />
    </Drawer>
  </GestureHandlerRootView> 
  )
}

export default DrawerLayout

const styles = StyleSheet.create({})