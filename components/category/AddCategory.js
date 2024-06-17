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
import { getCategories, registerCategory } from "../../constants/api/AuthenticationService";
import { useAuth } from "../../AuthContext/AuthContext";
import Toast from 'react-native-toast-message';
import toastConfig from "../../toastConfig";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from 'react-native-paper';
const AddCategory = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [parentCategory,setParentCategory]=useState()
  const [categories,setCategories]=useState([])
  const [isFeatured, setIsFeatured] = useState(true);
  const {logOut } = useAuth();
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
    if (!title || !description || !type) {
    //  alert("Please fill all fields and upload an image.");
      Toast.show({
        type: 'error',
        text1: 'Please fill all fields and upload an image'
      });
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
    formData.append('parentCategory',parentCategory)
    formData.append('isFeatured',isFeatured)
    
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
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories('Products'); // Adjust the endpoint based on your API
        if(response.status===401){
          await logOut()
          return
        }
        const fetchedCategories = response.data.results.map((category) => ({
          title: category.title,
          id: category.id,
          icon: () =>
            category.featuredImage ? (
              <Image
                source={{ uri: category.featuredImage }}
                style={styles.icon}
              />
            ) : (
              <View style={styles.placeholderIcon}>
                <Text>📷</Text>
              </View>
            ),
        }));
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        console.log(error?.response?.data?.message);
        await logOut()
      }
    };
    fetchCategories();
  }, []);

  return (
    <View style={{backgroundColor:'#fff',flex:1}}>

    <ScrollView style={styles.cover}>
    <Toast config={toastConfig}/>
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
       <Picker
        style={styles.input}
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        <Picker.Item  label={"Select Type"} value={""} />
        <Picker.Item  label={"Product"} value={"Product"} />
        <Picker.Item  label={"Service"} value={"Service"} />
      </Picker>
        
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

<Text style={styles.label}>Enter Category</Text>
      <Picker
        style={styles.input}
        selectedValue={parentCategory}
        onValueChange={(itemValue) => setParentCategory(itemValue)}
      >
        <Picker.Item  label={"Select Parent Category"} value={""} />
        {categories.map((item, index) => (
          <Picker.Item key={index} label={item.title} value={item.id} />
        ))}
      </Picker>
      <Text style={styles.label}>Featured?</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value={isFeatured}
          status={isFeatured ? 'checked' : 'unchecked'}
          onPress={() => setIsFeatured(true)}
        />
        <Text style={styles.radioText}>Yes</Text>
        <RadioButton
          value={isFeatured}
          status={!isFeatured ? 'checked' : 'unchecked'}
          onPress={() => setIsFeatured(false)}
        />
        <Text style={styles.radioText}>No</Text>
      </View>
      <View style={{ alignItems: "center" }}>
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
    marginBottom:20
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: SIZES.width * 0.05,
  },
  radioText: {
    marginRight: 20,
  },
});
