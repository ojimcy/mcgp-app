import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Avatar, Icon, Card } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import { countries } from "../../constants/api/statesConstants";
import Toast from "react-native-toast-message";
import PhoneNumber from "../country/phoneNumber";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";
import { useAuth } from "../../AuthContext/AuthContext";

const EditProfileScreen = ({ user }) => {
  const { token } = useAuth();
  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [country, setCountry] = useState(user.country);
  const [countryList, setCountries] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState();

  const router = useRouter();

  const removeAllSpaces = (str) => str.replace(/\s+/g, "");

  const handleUpdate = async () => {
    ///users/me
    const payLoad = {
      name,
      phoneNumber:
        removeAllSpaces(selectedCountry?.callingCode + phoneNumber) ||
        phoneNumber,
      country,
    };
    try {
      const { data } = await axios.patch(
        `${baseUrl}/users/${user.id}`,
        payLoad,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Information Successfully changed");
      router.push("/profile");
    } catch (error) {
      Alert.alert("Error", "Failed to update." + error?.response.data.message);
    } finally {
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Toast />
        <View style={styles.profileInfo}>
          {user?.profilePicture ? (
            <Avatar
              rounded
              source={{ uri: user?.profilePicture }}
              size="large"
            />
          ) : (
            <Avatar
              rounded
              title={user.name[0]}
              size="large"
              overlayContainerStyle={{ backgroundColor: "#9D6B38" }}
              titleStyle={{ color: "#fff" }}
            />
          )}
          <View style={styles.textInfo}>
            <Text style={styles.fullName}>{user.email}</Text>
          </View>
        </View>

        <TextInput
          placeholder="Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={country}
            onValueChange={(itemValue) => {
              setCountry(itemValue);
            }}
          >
            <Picker.Item label={"Select Country"} value={""} />
            {countryList.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        </View>

        <PhoneNumber
          inputValue={phoneNumber}
          setInputValue={setPhoneNumber}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: 5,
    width: SIZES.width * 0.9,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  profileInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textInfo: {
    marginLeft: 15,
  },
  pickerContainer: {
    width: SIZES.width * 0.9,
    height: (6.2 / 100) * SIZES.height,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 0,
    borderRadius: 10,
    marginHorizontal: SIZES.width * 0.05,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    height: "100%",
  },
  cover: {
    position: "absolute",
    top: SIZES.height * 0.1212,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
});

export default EditProfileScreen;
