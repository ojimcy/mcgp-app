import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { registerAds } from "../../constants/api/AuthenticationService";
import Toast from "react-native-toast-message";
import toastConfig from "../../toastConfig";
import { LinearProgress } from "react-native-elements";
import { useAuth } from "../../AuthContext/AuthContext";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";

const AddProduct = () => {
  const { token } = useAuth();
  const [productImages, setProductImages] = useState([]);
  const [description, setDescription] = useState("");
  const [productName, setProductName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [attributes, setAttributes] = useState([]);
  const { setLoading, loading } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const maxDescriptionLength = 100;

  const delay = useCallback((duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category?type=Product`, {
          headers: {
            Authorization: `${token}`,
          },
        }); // Adjust the endpoint based on your API
        const fetchedCategories = response.data.results;
        setCategories(fetchedCategories);
      } catch (error) {}
    };
    fetchCategories();
  }, []);

  const pickProductImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Toast.show({
        type: "error",
        text1: "Permission Denied",
        text2: "Permission to access media library denied",
      });
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
      Toast.show({
        type: "info",
        text1: "No Images Selected",
        text2: "You did not select any images.",
      });
    }
  };

  const createProduct = async () => {
    if (
      !productName ||
      !location ||
      !phoneNumber ||
      !email ||
      !category ||
      !description ||
      !price ||
      productImages.length === 0
    ) {
      await delay();
      setIsModalVisible(true);
      Toast.show({
        type: "error",
        text1: "Missing Fields",
        text2: "Please fill all the fields and upload images.",
      });
      return;
    }
    setLoading(true);
    const formData = new FormData();
    productImages.forEach((uri, index) => {
      formData.append("images", {
        uri,
        type: "image/jpeg",
        name: `image_${index}.jpg`,
      });
    });

    formData.append("name", productName);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("type", "Product");
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("category", category);
    formData.append("companyName", companyName);
    formData.append("price", parseInt(price));
    formData.append("stock", parseInt(stock));
    attributes.forEach((attribute, index) => {
      formData.append(`attributes[${index}].name`, attribute.name);
      formData.append(`attributes[${index}].value`, attribute.value);
    });
    try {
      const response = await axios.post(`${baseUrl}/adverts`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        setLoading(false);
        setIsModalVisible(true);
        Toast.show({
          type: "success",
          text1: "Product Created",
          text2: "The product was created successfully.",
        });
        await delay(2000);
        setIsModalVisible(false);
        resetForm();
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data.message);
      setLoading(false);
      setIsModalVisible(true);
      Toast.show({
        type: "error",
        text1: "Error Creating Product",
        text2: "An error occurred while creating product",
      });
      await delay(4000);
      setIsModalVisible(false);
    }
  };

  const resetForm = () => {
    setPhoneNumber("");
    setCategory("");
    setDescription("");
    setEmail("");
    setLocation("");
    setProductImages([]);
    setProductName("");
    setPrice("");
    setStock("");
    setAttributes([]);
  };

  const handleAddAttribute = () => {
    setAttributes([...attributes, { name: "", value: "" }]);
  };

  const handleRemoveAttribute = (index) => {
    const newAttributes = [...attributes];
    newAttributes.splice(index, 1);
    setAttributes(newAttributes);
  };

  const handleAttributeChange = (index, field, value) => {
    const newAttributes = [...attributes];
    newAttributes[index][field] = value;
    setAttributes(newAttributes);
  };

  return (
    <ScrollView style={styles.cover}>
      <Modal visible={isModalVisible} style={styles.modal} transparent={true}>
        <Toast config={toastConfig} />
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(false);
          }}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </Modal>

      <Text style={styles.label}>Enter product name</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Enter Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Enter Valid phone number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Enter Valid Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Company Name</Text>
      <TextInput
        style={styles.input}
        value={companyName}
        onChangeText={setCompanyName}
      />
      <Text style={styles.label}>Enter Category</Text>
      <Picker
        style={styles.input}
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label={"Select Category"} value={""} />
        {categories.map((item, index) => (
          <Picker.Item key={index} label={item.title} value={item.id} />
        ))}
      </Picker>
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={String(price)}
        onChangeText={(value) => setPrice(value)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Stock</Text>
      <TextInput
        style={styles.input}
        value={String(stock)}
        onChangeText={(value) => setStock(value)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Upload Quality product images</Text>
      <View style={styles.multipleImageContainer}>
        <TouchableOpacity onPress={pickProductImages}>
          <Icon name="upload" size={25} color="#aaa" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        {productImages &&
          productImages.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.uploadedImage} />
          ))}
      </View>
      <Text style={styles.label}>Description</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Description"
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

      <Text style={styles.label}>Attributes</Text>
      {attributes.map((attribute, index) => (
        <View key={index} style={styles.attributeGroup}>
          <TextInput
            style={styles.attributeInput}
            placeholder="Attribute Name"
            value={attribute.name}
            onChangeText={(value) =>
              handleAttributeChange(index, "name", value)
            }
          />
          <TextInput
            style={styles.attributeInput}
            placeholder="Attribute Value"
            value={attribute.value}
            onChangeText={(value) =>
              handleAttributeChange(index, "value", value)
            }
          />
          <TouchableOpacity
            style={styles.removeAttributeButton}
            onPress={() => handleRemoveAttribute(index)}
          >
            <Icon name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity
        style={styles.addAttributeButton}
        onPress={handleAddAttribute}
      >
        <Text style={styles.addAttributeButtonText}>Add Attribute</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.progressContainer}>
          <LinearProgress color={COLORS.primary} />
          <Text style={styles.loadingText}>Submitting...</Text>
        </View>
      )}
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonLoading]}
          onPress={createProduct}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddProduct;

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
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
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
  multipleImageContainer: {
    alignItems: "center",
    backgroundColor: COLORS.gray,
    width: SIZES.width * 0.9,
    height: 0.285407725 * SIZES.height,
    marginHorizontal: SIZES.width * 0.05,
    justifyContent: "center",
    marginBottom: 20,
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
  progressContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  buttonLoading: {
    backgroundColor: "#d4ba92", // Change to your desired color when loading
  },
  dropdown: {
    width: "90%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: SIZES.width * 0.05,
    marginBottom: 15,
  },
  dropdownContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  placeholderIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  modal: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "50%",
    height: "55%",
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  attributeGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: SIZES.width * 0.05,
  },
  attributeInput: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: COLORS.gray,
    marginRight: 10,
  },
  removeAttributeButton: {
    padding: 10,
  },
  addAttributeButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: SIZES.width * 0.05,
  },
  addAttributeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
