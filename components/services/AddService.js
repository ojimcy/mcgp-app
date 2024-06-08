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
  import { registerAds } from "../../constants/api/AuthenticationService";
  
  const AddService = () => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [productImages, setProductImages] = useState([]);
    const [description, setDescription] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
  
    const maxDescriptionLength = 100;
  
    const pickImageAsync = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
        setProductImages([...productImages, result.assets[0].uri]);
      } else {
        alert("You did not select any image.");
      }
    };
  
    const pickServiceImages = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library denied");
        return;
      }
  
      let result = await ImagePicker.launchImageLibraryAsync({
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true,
      });
  
      if (!result.canceled) {
        setProductImages(result.assets.map((asset) => asset.uri));
      } else {
        alert("You did not select any images.");
      }
    };
  
    async function createService() {
      const formData = new FormData();
      productImages.forEach((uri, index) => {
        formData.append('images', {
          uri,
          type: 'image/jpeg',
          name: `image_${index}.jpg`,
        });
      });
  
      formData.append('name', serviceName);
      formData.append('description', description);
      formData.append('price', minPrice);
      formData.append('location', location);
      formData.append('type', "Service");
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('category', category);
      formData.append('companyName', "VS45");
      try {
        console.log(formData)
        const response = await registerAds(formData);
        console.log(response);
      } catch (error) {
        console.log(error);
        console.log(error?.response?.data?.message);
      }
    }
  
    return (
      <ScrollView style={styles.cover}>
        <Text style={styles.label}>Enter service name</Text>
        <TextInput
          style={styles.input}
          value={serviceName}
          onChangeText={(e) => setServiceName(e)}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Enter Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={(e) => setLocation(e)}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Enter Valid phone number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={(e) => setPhoneNumber(e)}
          keyboardType="phone-pad"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Enter Valid Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(e) => setEmail(e)}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Enter Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={(e) => setCategory(e)}
        />
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <TextInput
            style={[styles.input, styles.priceInput]}
            placeholder="Minimum"
            value={minPrice}
            onChangeText={setMinPrice}
          />
          <Text style={styles.priceSeparator}>——</Text>
          <TextInput
            style={[styles.input, styles.priceInput]}
            placeholder="Maximum"
            value={maxPrice}
            onChangeText={setMaxPrice}
          />
        </View>
  
        <Text style={styles.label}>Upload Quality service images</Text>
        <View style={styles.multipleImageContainer}>
          <TouchableOpacity onPress={pickServiceImages}>
            <Icon name="upload" size={25} color="#aaa" />
          </TouchableOpacity>
        </View>
  
        <View style={styles.imageContainer}>
          {productImages &&
            productImages.map((uri, index) => (
              <Image key={index} source={{ uri }} style={styles.uploadedImage} />
            ))}
        </View>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            placeholder="Please explain your service for more detail"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            maxLength={maxDescriptionLength}
            value={description}
            onChangeText={setDescription}
          />
          <Text style={styles.charCount}>
            {description.length}/{maxDescriptionLength}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={createService}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  export default AddService;
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      padding: 20,
      backgroundColor: COLORS.white,
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
      top: 10,
      marginBottom: 15,
      backgroundColor: COLORS.white,
    },
    label: {
      marginHorizontal: SIZES.width * 0.05,
    },
    priceRangeContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
    },
    priceInput: {
      flex: 1,
    },
    priceSeparator: {
      marginHorizontal: 10,
    },
    uploadButton: {
      alignItems: "center",
      justifyContent: "center",
      width: 100,
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
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    multipleImageContainer: {
      alignItems: "center",
      backgroundColor: COLORS.gray,
      width: SIZES.width * 0.9,
      height: 0.285407725 * SIZES.height,
      marginHorizontal: SIZES.width * 0.05,
      justifyContent: "center",
      marginBottom: 20,
    },
    textAreaContainer: {
      width: SIZES.width * 0.9,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      backgroundColor: "#f9f9f9",
      marginHorizontal: SIZES.width * 0.05,
      marginBottom: 15,
    },
    textArea: {
      height: 150,
      justifyContent: "flex-start",
      textAlignVertical: "top",
    },
    charCount: {
      textAlign: "right",
      color: "gray",
      fontSize: 12,
    },
  });
  