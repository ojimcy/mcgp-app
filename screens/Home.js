import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../components/headers/HomeHeader'

const HomeScreen = () => {
  return (
    <View style={styles.content}>
     <HomeHeader/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    content:{
        flex:1
    }
})