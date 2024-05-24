import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import { router } from "expo-router";

export default function Login({ navigation }) {
  function handlePasswordRecovery(){
    router.push('/recovery')
  }
  function Signup(){
    router.push('/signup')
  }
  function login(){
    router.push('/home')
  }
  return (
    <View style={styles.container}>
     
      <View style={styles.cover}>
      <Text style={styles.loginText}>Login</Text>
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
      </View>
      
      
      <TouchableOpacity onPress={handlePasswordRecovery}>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Text style={styles.orText}>Or</Text>
      </View>

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailButtonText}>Continue With Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={Signup}
        style={{ alignContent: "center", alignItems: "center" }}
      >
        <Text style={styles.question}>
          New To Tsa? <Text style={styles.signUpText}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
    marginTop: 10,
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
  }
});
