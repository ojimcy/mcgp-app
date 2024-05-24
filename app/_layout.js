import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as NavigationBar from 'expo-navigation-bar';


const RootLayout = () => {

  
  useEffect(() => {
    async function configureNavigationBar() {

      // Set the navigation bar position to absolute
      await NavigationBar.setPositionAsync('absolute');

      // Set the navigation bar background color to transparent
      await NavigationBar.setBackgroundColorAsync('#fff');
    }

    configureNavigationBar();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown:false
      }}/>
      <Stack.Screen name='payments' options={{
        headerShown:false
      }}/>
      <Stack.Screen name='order' options={{
        headerShown:false
      }}/>
      <Stack.Screen name='login' options={{
        headerShown:false
      }}/>
      <Stack.Screen name='signup' options={{
        headerShown:false
      }}/>
      <Stack.Screen name='(dashboard)' options={{
        headerShown:false
      }}/>
     
    </Stack>
    </GestureHandlerRootView>
  )
}

export default RootLayout

const styles = StyleSheet.create({})