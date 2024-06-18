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
import { useAuth } from "../../AuthContext/AuthContext";
import Toast from "react-native-toast-message";
import toastConfig from "../../toastConfig";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import CountryComponent from "../country/countrypicker";
const Delivery = ({data}) => {
 console.log(data)

  const [description, setDescription] = useState("");
  const [location, setLocation] = useState();
  const [states, setStates] = useState([]);
  const [state, setState] = useState();
  const [quantity, setQuantity] = useState(0);
  const [cities, setCities] = useState([]);
  const [homeDelivery, setHomeDelivery] = useState(true);
  const [country,setCountry]=useState()
  const { logOut } = useAuth();
 
  const postData = async ( data) => {
    try {
      const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonResponse = await response.json();
      console.log(jsonResponse.data.states)
      setStates(jsonResponse.data.states)
      return jsonResponse;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  };
  const getCity = async (data) => {
    console.log(data)
    try {
      const response = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonResponse = await response.json();
      console.log("checking the response",jsonResponse.data)
setCities(jsonResponse.data)
      return jsonResponse;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView style={styles.cover}>
        <Toast config={toastConfig} />
        {/*  <ListCard itemValue={data}/> */}
        <Text style={[styles.input,{color:COLORS.primary,fontWeight:'600'}]}> You are about to purchase {data}</Text>
        <CountryComponent 
        country={country} setCountry={(e)=>{
          postData({country:e})
          setCountry(e)
          }} />
        <Text style={styles.label}>Enter State</Text>
        <Picker
          style={styles.input}
          selectedValue={state}
          onValueChange={(itemValue) =>{
              getCity({country:country,state:itemValue})
            setState(itemValue)
          }}
        >
          <Picker.Item label={"Select State"} value={""} />
          {states.map((item, index) => (
            <Picker.Item key={index} label={item.name} value={item.name} />
          ))}
        </Picker>
        <Text style={styles.label}>Enter Location</Text>
         <Picker
          style={styles.input}
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label={"Select City"} value={""} />
          {cities.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
        <Text style={styles.label}>Enter Quantity</Text>
     
        <TextInput
        placeholder="Quantity"
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        />
        <Text style={styles.label}>Home Delivery</Text>
        <View style={styles.radioContainer}>
          <View style={{flexDirection:'row'}}>
          <RadioButton
            value={homeDelivery}
            status={homeDelivery ? "checked" : "unchecked"}
            onPress={() => setHomeDelivery(true)}
          />
          <Text style={styles.radioText}>Yes</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <RadioButton
            value={homeDelivery}
            status={!homeDelivery ? "checked" : "unchecked"}
            onPress={() => setHomeDelivery(false)}
          />
          <Text style={styles.radioText}>No</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginBottom: 55 }}>
          <TouchableOpacity style={styles.button} /* onPress={createCategory} */>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Delivery;

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
  radioContainer: {
   
    marginBottom: 20,
    marginHorizontal: SIZES.width * 0.05,
  },
  radioText: {
    marginRight: 20,
    paddingTop:10
  },
});
