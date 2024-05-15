import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Payments from '../components/onboarding/payments'

const PaymentScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Payments  navigation={navigation}/>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})