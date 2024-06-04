import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import { router } from 'expo-router'
//import Country from './Country'

const Signup = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.cover}>
      <Text style={styles.loginText}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
  {/*     <Country/> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry={true}
      />
      </View>
      
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Verify')} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ alignContent: "center", alignItems: "center" }}
        onPress={()=>router.push('/login')}
      >
        <Text style={styles.question}>
          Already have an account? <Text style={styles.signUpText}>Login</Text>
        </Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
      },
      loginText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        left: "5%",
        color: COLORS.primary,
      },
      input: {
        width: SIZES.width * 0.9,
        height: (6.2 / 100) * SIZES.height,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        marginHorizontal:SIZES.width * 0.05,
      },
      button: {
        backgroundColor: COLORS.primary,
        width: SIZES.width * 0.9,
        alignItems: "center",
        justifyContent:'center',
        marginTop: SIZES.height/1.8,
        height: 0.0687 * SIZES.height,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.primary,
      },
      emailButton: {
        backgroundColor: COLORS.white,
        width: SIZES.width * 0.9,
        padding: 10,
        alignItems: "center",
        justifyContent:'center',
        marginTop: 10,
        height: 0.0687 * SIZES.height,
        borderRadius: 10,
        borderWidth: 1,
      },
      emailButtonText: {
        fontWeight:'semibold'
      },
      buttonText: {
        color: "#fff",
        fontSize: 16,
      },
      forgotPassword: {
       marginBottom:15,
        position: "relative",
        color: COLORS.primary,
        paddingLeft:"1%",
      },
      orText: {
        marginVertical: 10,
      },
      signUpText: {
        marginTop: 10,
        color: COLORS.primary,
      },
      question: {
        marginTop: 10,
      },
      cover:{
        position:'absolute',
        top: SIZES.height*(0.1212),
        marginBottom:15
      }
})