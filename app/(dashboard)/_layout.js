import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { Tabs } from 'expo-router'
import * as NavigationBar from 'expo-navigation-bar';
import { COLORS } from '../../constants';
//import * as NavigationBar from 'expo-navigation-bar';
const DashLayout = () => {
    
    useEffect(() => {
        async function configureNavigationBar() {
            // Set the navigation bar position to absolute
            await NavigationBar.setPositionAsync('absolute');
            await NavigationBar.setBackgroundColorAsync('#fff');
          }
      
          configureNavigationBar();
      }, []);
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor: COLORS.black,
        headerShown: false,
        tabBarLabelStyle: {
            fontSize: 11, // Increase the font size here
          },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Tsa Connect',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/icons/tsa.png')} style={{height:25,width:25,width:20,tintColor:focused ?COLORS.primary:COLORS.black}} resizeMode='contain' />
           /*  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} /> */
          ),
          headerTintColor: COLORS.primary,
          headerShown:false
        }}
      />  
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Marketplace',
          tabBarIcon: ({ color, focused }) => (
          /*   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} /> */
          <Image source={require('../../assets/icons/marketplace.png')} style={{
            height:24,
            width:24,
            tintColor:focused ?COLORS.primary:COLORS.black}} resizeMode='contain'/>
          ),
          headerShown:false
        }}
      />  
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, focused }) => (
           /*  <TabBarIcon name={focused ? 'person' : 'person'} color={color} /> */
           <Image source={require('../../assets/icons/service.png')} 
           style={{height:24,width:24,tintColor:focused ?COLORS.primary:COLORS.black}}
           resizeMode='contain'
           />
          ),
          headerShown:false
        }}
      />  
      <Tabs.Screen
        name="easyswap"
        options={{
          title: 'Easyswap',
          tabBarIcon: ({ color, focused }) => (
           /*  <TabBarIcon name={focused ? 'person' : 'person'} color={color} /> */
           <Image 
           source={require('../../assets/icons/swap.png')}
            style={{height:24,width:24,tintColor:focused ?COLORS.primary:COLORS.black}}
            resizeMode='contain'
            />
          ),
          headerShown:false
        }}
      />  
      <Tabs.Screen
        name="tokenization"
        options={{
          title: 'Tokenization',
          tabBarIcon: ({ color, focused }) => (
           /*  <TabBarIcon name={focused ? 'person' : 'person'} color={color} /> */
           <Image source={require('../../assets/icons/token.png')} 
           style={{  height:24,width:24, tintColor:focused ?COLORS.primary:COLORS.black}}
           resizeMode='contain'
           />
          ),
          headerShown:false
        }}
      />  
    </Tabs>
  )
}

export default DashLayout

const styles = StyleSheet.create({})