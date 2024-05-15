import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../components/onboarding/Login'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Login navigation={navigation}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})