import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { registerCategory } from "../../constants/api/AuthenticationService";
import { baseUrl } from "../../constants/api/apiClient";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";
import Toast from 'react-native-toast-message';
import toastConfig from "../../toastConfig";
const AddCategory = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const { token,logOut } = useAuth();
  const pickImageAsync = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library denied");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setFeaturedImage(result.assets[0].uri);
      } else {
        alert("You did not select any image.");
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  async function createCategory() {
    if (!title || !description ) {
      alert("Please fill all fields and upload an image.");
      return;
    }
    const formData = new FormData();
    formData.append('image', {
      uri: featuredImage,
      type: 'image/jpeg',
      name: 'cat-file',
    });
    formData.append('title',title)
    formData.append('description',description)
    formData.append('type',type)
    
    try {
      const response = await registerCategory(formData);
      console.log(response)
      /* const response = await axios.post(`${baseUrl}/category`, formData, {
        headers: {
          Authorization: token,
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }); */
      if (response.status === 201) {
        Toast.show({
            type: 'success',
            text1: 'Category Created',
            text2: 'The category was created successfully.',
          });
      }
    } catch (error) {
      if (error.response) {
            Toast.show({
              type: 'error',
              text1: 'Error Creating Category',
              text2: error.response.data.message || 'An error occurred',
            });
      } else {
        Toast.show({
            type: 'error',
            text1: 'Network Error',
            text2: error.message,
          });
      }
    }
  }

  return (
    <ScrollView style={styles.cover}>
      <Text style={styles.label}>Enter Category</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <Text style={styles.label}>Enter Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(e) => setDescription(e)}
        autoCapitalize="none"
      />
       <Text style={styles.label}>Enter Category Type</Text>
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={(e) => setType(e)}
      />
         <Toast config={toastConfig}/>
      <Text style={styles.label}>Upload Featured Image</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity onPress={pickImageAsync}>
          <Icon name="upload" size={25} color="#aaa" />
        </TouchableOpacity>
      </View>

      {featuredImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: featuredImage }} style={styles.uploadedImage} />
        </View>
      )}

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={createCategory}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.white,
  },
  input: {
    width: SIZES.width * 0.9,
    height: (6.2 / 100) * SIZES.height,
    borderColor: "gray",
    marginTop: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: SIZES.width * 0.05,
    backgroundColor: COLORS.gray,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    height: 0.0687 * SIZES.height,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  label: {
    marginHorizontal: SIZES.width * 0.05,
  },
  uploadContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: SIZES.width * 0.9,
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    marginHorizontal: SIZES.width * 0.05,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginHorizontal: SIZES.width * 0.05,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  cover: {
    backgroundColor: COLORS.white,
  },
});
