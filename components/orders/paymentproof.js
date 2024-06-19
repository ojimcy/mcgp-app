import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { generateFileName } from "../../constants/api/filename";
import { sendProof } from "../../constants/api/AuthenticationService";
import * as ImagePicker from "expo-image-picker";
import { COLORS, SIZES } from "../../constants";
import Toast from "react-native-toast-message";
import { router } from "expo-router";
import { Icon } from "react-native-elements";
import { baseUrl } from "../../constants/api/apiClient";
import { useAuth } from "../../AuthContext/AuthContext";
import axios from "axios";
const PaymentProof = ({id}) => {
    console.log(id);
  const [image, setImage] = useState();
  const {token}=useAuth()
  const pickImageAsync = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library denied");
        return;
      }

      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      } else {
        alert("You did not select any image.");
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  async function uploadProof() {
    const formData = new FormData();
    formData.append("proof", {
      uri: image,
      type: "image/jpeg",
      name: `image_${generateFileName}.jpg`,
    });
    try {
        const response = await axios.post(`${baseUrl}/${id}/pay`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `${token}`
            }
          });
      console.log(response)
      if (response.status === 201) {
        Toast.show({
          type: "success",
          text1: "Category Created",
          text2: "The category was created successfully.",
        });
        router.push('/categoryproducts')
      }
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    /*   if (error.response) {
        Toast.show({
          type: "error",
          text1: "Error Creating Category",
          text2: error.response.data.message || "An error occurred",
        });
        
      } else {
        Toast.show({
          type: "error",
          text1: "Network Error",
          text2: error.message,
        });
      } */
    }
  }
  return (
    <View style={styles.container}>
        <Toast/>
      <Text style={styles.label}>Upload Proof of Payment</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity onPress={pickImageAsync}>
          <Icon name="upload" size={25} color="#aaa" />
        </TouchableOpacity>
      </View>

      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        </View>
      )}
           <View style={{ alignItems: "center",marginBottom:55 }}>
        <TouchableOpacity style={styles.button} onPress={uploadProof}>
          <Text style={styles.buttonText}>Send proof</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

export default PaymentProof;

const styles = StyleSheet.create({
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
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.white,
    alignItems:'center'
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
    marginBottom:20
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
