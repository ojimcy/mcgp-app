import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [idImage, setIdImage] = useState(null);
  const [productImages, setProductImages] = useState([]);

  const selectImage = (setImage) => {
    launchImageLibrary({}, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter product name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Valid phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Valid Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.priceRangeContainer}>
        <TextInput
          style={[styles.input, styles.priceInput]}
          placeholder="50,000"
          value={minPrice}
          onChangeText={setMinPrice}
        />
        <Text style={styles.priceSeparator}>—</Text>
        <TextInput
          style={[styles.input, styles.priceInput]}
          placeholder="Maximum"
          value={maxPrice}
          onChangeText={setMaxPrice}
        />
      </View>
      <TouchableOpacity style={styles.uploadButton} onPress={() => selectImage(setIdImage)}>
        {idImage ? (
          <Image source={{ uri: idImage }} style={styles.uploadedImage} />
        ) : (
          <Icon name="upload" size={30} color="#aaa" />
        )}
        <Text>Upload ID</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={() => selectImage(setProductImages)}>
        <Icon name="upload" size={30} color="#aaa" />
        <Text>Upload Quality product images</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  priceRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  priceInput: {
    flex: 1,
  },
  priceSeparator: {
    marginHorizontal: 10,
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default AddProduct;
