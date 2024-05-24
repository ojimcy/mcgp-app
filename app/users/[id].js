import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const GetUser = () => {
    const {id}=useLocalSearchParams()
  return (
    <View>
      <Text>Welcome user {id}</Text>
    </View>
  )
}

export default GetUser

const styles = StyleSheet.create({})