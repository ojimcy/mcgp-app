import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Order from '../components/onboarding/order'

const OrderScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Order navigation={navigation}/>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})