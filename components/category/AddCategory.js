import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { registerCategory } from "../../constants/api/AuthenticationService";
import { useAuth } from "../../AuthContext/AuthContext";
import Toast from "react-native-toast-message";
import toastConfig from "../../toastConfig";
import { Picker } from "@react-native-picker/picker";
import { generateFileName } from "../../constants/api/filename";
import { baseUrl } from "../../constants/api/apiClient";
import { router } from "expo-router";
import axios from "axios";

const AddCategory = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [parentCategory, setParentCategory] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isParent, setIsParent] = useState(false);
  const [hasParent, setHasParent] = useState(false);
  const [parentCategories, setParentCategories] = useState([]);
  const { token, currentUser } = useAuth();

  if (!currentUser) {
    router.push("/login");
  }

  useEffect(() => {
    const fetchParentCategories = async () => {
      try {
        const response = await axios.get(`${baseUrl}/category?isParent=true`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        setParentCategories(response.data.results);
      } catch (error) {
        console.error("Error fetching parent categories:", error);
      }
    };

    if (isParent) {
      fetchParentCategories();
    }
  }, [isParent]);

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
        setFeaturedImage(result.assets[0].uri);
      } else {
        alert("You did not select any image.");
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const createCategory = async () => {
    if (!title || !type) {
      Toast.show({
        type: "error",
        text1: "Title and type are required",
      });
      return;
    }
    const formData = new FormData();
    if (featuredImage) {
      formData.append("image", {
        uri: featuredImage,
        type: "image/jpeg",
        name: `image_${generateFileName()}.jpg`,
      });
    }

    formData.append("title", title);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("isFeatured", isFeatured);
    formData.append("isParent", isParent);
    if (parentCategory) {
      formData.append("parentCategory", parentCategory);
    }

    try {
      const response = await registerCategory(formData);
      if (response.status === 201) {
        Toast.show({
          type: "success",
          text1: "Category Created",
          text2: "The category was created successfully.",
        });
        setTitle("");
        setDescription("");
        setType("");
        setFeaturedImage(null);
        setParentCategory("");
        setIsFeatured(false);
        setIsParent(false);
      }
    } catch (error) {
      console.error("Error Creating Category", error.response.data.message);
      Toast.show({
        type: "error",
        text1: "Error Creating Category",
      });
    }
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScrollView style={styles.cover}>
        <Toast config={toastConfig} />
        <Text style={styles.label}>Title</Text>
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
        <Picker
          style={styles.input}
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label={"Select Type"} value={""} />
          <Picker.Item label={"Product"} value={"Product"} />
          <Picker.Item label={"Service"} value={"Service"} />
        </Picker>

        <Text style={styles.label}>Upload Featured Image</Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={pickImageAsync}>
            <Icon name="upload" size={25} color="#aaa" />
          </TouchableOpacity>
        </View>

        {featuredImage && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: featuredImage }}
              style={styles.uploadedImage}
            />
          </View>
        )}

        <Text style={styles.label}></Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setHasParent(!hasParent)}
        >
          <Icon
            name={hasParent ? "check-square-o" : "square-o"}
            size={25}
            color="#000"
          />
          <Text style={styles.checkboxLabel}>Select Parent Category</Text>
        </TouchableOpacity>
        {hasParent && (
          <Picker
            style={styles.input}
            selectedValue={parentCategory}
            onValueChange={(itemValue) => setParentCategory(itemValue)}
          >
            <Picker.Item label={"Select Parent Category"} value={""} />
            {parentCategories.map((item, index) => (
              <Picker.Item key={index} label={item.title} value={item.id} />
            ))}
          </Picker>
        )}

        <Text style={styles.label}>Parent Category?</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsParent(!isParent)}
        >
          <Icon
            name={isParent ? "check-square-o" : "square-o"}
            size={25}
            color="#000"
          />
          <Text style={styles.checkboxLabel}>Is Parent</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Featured?</Text>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsFeatured(!isFeatured)}
        >
          <Icon
            name={isFeatured ? "check-square-o" : "square-o"}
            size={25}
            color="#000"
          />
          <Text style={styles.checkboxLabel}>Is Featured</Text>
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginBottom: 55 }}>
          <TouchableOpacity style={styles.button} onPress={createCategory}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    marginBottom: 20,
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SIZES.width * 0.05,
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
});
