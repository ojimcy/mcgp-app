import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { Picker } from "@react-native-picker/picker";

const Delivery = () => {
  const [state, setState] = useState("benue");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState();
  const [deliveryfee, setDeliveryFee] = useState(0);
  const [quantity,setQuantity]=useState(0)
  function Continue() {}
  useEffect(() => {
    const fetStates = async () => {
      const response = await fetch("https://api.facts.ng/v1/states");
      const result = response.json();
      result
        .then((data) => {
          setStateList(data);
        })
        .catch((err) => {
          alert(err);
        });
    };
    const fetCities = async () => {
      const response = await fetch(`https://api.facts.ng/v1/states/${state}`);
      const result = response.json();
      result
        .then((data) => {
          console.log(data);
          setCityList(data.lgas);
          setDeliveryFee(45);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetStates();
    fetCities();
  }, [state, city]);
  return (
    <View style={styles.cover}>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.label}>Choose your state</Text>
        <Picker
          style={styles.input}
          selectedValue={state}
          onValueChange={setState}
          autoCapitalize="none"
        >
          {stateList.map((state) => (
            <Picker.Item key={state.id} label={state.name} value={state.id} />
          ))}
        </Picker>
        <Text style={styles.label}>Choose your City</Text>
        <Picker
          style={styles.input}
          selectedValue={city}
          onValueChange={setCity}
          autoCapitalize="none"
        >
          {cityList.length > 0 &&
            cityList.map((name, index) => (
              <Picker.Item key={index} label={name} value={name} />
            ))}
        </Picker>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text style={styles.label}>Delivery Fee</Text>
          <Text style={styles.label}>NGN</Text>
        </View>
        <TextInput
          style={styles.input}
          value={String(deliveryfee)}
          onChangeText={setDeliveryFee}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Number of Products</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: SIZES.width * 0.9,
            marginHorizontal: SIZES.width * 0.05,
          }}
        >
          <TouchableOpacity
            style={styles.minAdd}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.productsNo}>
          <Text >{quantity}</Text>
          </View>
          
          <TouchableOpacity
           style={styles.minAdd}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button]}
          onPress={Continue}
          /*  disabled={loading} */
        >
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}></View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.white,
    alignItems: "center",
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
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginHorizontal: SIZES.width * 0.05,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  cover: {
    backgroundColor: COLORS.white,
    height: SIZES.height,
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
  minAdd: {
    height: (6.2 / 100) * SIZES.height,
    width: 40,
    backgroundColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productsNo: {
    height: (6.2 / 100) * SIZES.height,
    width: 200,
    backgroundColor: COLORS.gray,
   padding:10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
