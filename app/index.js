import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Products from '../components/onboarding/products'

const Dashboard = () => {
  return (
    <View>
     {/*  <Text>Dashboard</Text>
      <Link href='/users/1'>Go to User</Link>
      <Pressable onPress={()=>{
        router.push('/users/2')
      }}>
        <Text>Go to User 2</Text>
      </Pressable> */}
      <Products/>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})