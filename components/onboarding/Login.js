import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
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
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailButtonText}>Continue With Email</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.question}>New To Tsa? {" "}
      <Text style={styles.signUpText}>Signup</Text>  
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    left:'5%',
    position:'absolute',
    top:113,
    color:COLORS.primary
  },
  input: {
    width: SIZES.width*(0.9),
    height: (6.2/100)*SIZES.height,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius:10
  },
  button: {
    backgroundColor: COLORS.primary,
    width: SIZES.width*(0.9),
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    height:(0.0687)*SIZES.height,
    borderRadius:10,
    borderWidth:1,
    borderColor:COLORS.primary
  },
  emailButton: {
    backgroundColor: COLORS.white,
    width: SIZES.width*(0.9),
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    height:(0.0687)*SIZES.height,
    borderRadius:10,
    borderWidth:1
  },
  emailButtonText:{
    color:COLORS.primary
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginBottom: 10,
    position:'relative',
    color: COLORS.primary,
  },
  orText: {
    marginVertical: 10,
  },
  signUpText: {
    marginTop: 10,
    color:COLORS.primary
  },
  question:{
    marginTop: 10,
  }
});
