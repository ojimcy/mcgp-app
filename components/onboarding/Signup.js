import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { router } from "expo-router";
import { LinearProgress } from "react-native-elements";
import { useAuth } from "../../AuthContext/AuthContext";
import PhoneNumber from "../country/phoneNumber";
import CountryComponent from "../country/countrypicker";
//import Country from './Country'

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [country, setCountry] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { loading, setLoading, signup } = useAuth();
  const [selectedCountry, setSelectedCountry] = useState(null);
  function removeAllSpaces(str) {
    return str.replace(/\s+/g, '');
}
  async function handleSignup() {
    setLoading(true);
    const payLoad = { name, email:email.trim(), password, country, phoneNumber:removeAllSpaces(selectedCountry?.callingCode+phoneNumber)};
    if (password != confirmPassword) {
      setLoading(false);
      return alert("Password Mismatch");
    }
    try {
      const result = await signup(payLoad);
      if (result.success) {
        setLoading(false);
        router.push("/home");
      } else {
       //alert('Something went Wrong')
       alert(result.message)
      }
    } catch (err) {
      alert(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Text style={styles.loginText}>Sign up</Text>
        <TextInput
          value={name}
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <PhoneNumber 
        inputValue={phoneNumber} 
        setInputValue={setPhoneNumber}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        />
        <CountryComponent
        country={country}
        setCountry={setCountry}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
        <TextInput
          value={confirmPassword}
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry={true}
          onChangeText={(e) => setConfirmPassword(e)}
        />
      </View>
      <View>
      {loading && (
        <View style={styles.progressContainer}>
          <LinearProgress color={COLORS.primary} />
          {/* <ActivityIndicator size="large" color={COLORS.primary} /> */}
          <Text style={styles.loadingText}>Signing in...</Text>
        </View>
      )}
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignContent: "center", alignItems: "center" }}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.question}>
            Already have an account?{" "}
            <Text style={styles.signUpText}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

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
    marginHorizontal: SIZES.width * 0.05,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.height / 1.9,
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
    justifyContent: "center",
    marginTop: 10,
    height: 0.0687 * SIZES.height,
    borderRadius: 10,
    borderWidth: 1,
  },
  emailButtonText: {
    fontWeight: "semibold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  forgotPassword: {
    marginBottom: 15,
    position: "relative",
    color: COLORS.primary,
    paddingLeft: "1%",
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
  cover: {
    position: "absolute",
    top: SIZES.height * 0.1212,
    marginBottom: 15,
  },
  progressContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});
