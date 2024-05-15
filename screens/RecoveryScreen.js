import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PasswordRecovery from '../components/onboarding/Passwordrecovery'

const RecoveryScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PasswordRecovery navigation={navigation}/>
    </View>
  )
}

export default RecoveryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})