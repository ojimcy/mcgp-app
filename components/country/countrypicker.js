import { useState } from "react";
import { Text, TouchableOpacity,StyleSheet, Image } from "react-native";
import { View } from "react-native";
import {CountryPicker} from "react-native-country-codes-picker";
import { COLORS, SIZES } from "../../constants";

export default function CountryComponent({country,setCountry}) {
  const [show, setShow] = useState(false);
/* const [country,setCountry]=useState('') */
  return (
    <View style={{alignContent:'center'}}>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={styles.input}
      >
        <Text style={{
            color: 'black',
            fontSize: 15
        }}>
            {country||<Text style={{color:COLORS.grey}}>Select your country</Text>}
        </Text>
        <Image
              source={require("../../assets/icons/down.png")}
              style={[styles.icon, { tintColor: COLORS.black }]}
            />
      </TouchableOpacity>
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
            console.log(item.name.en)
            setCountry(item.name.en)
          setShow(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
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
      icon: {
        color: COLORS.black,
        height: 25,
        width:25,
        resizeMode: "contain",
        position:'absolute',
        right:7,
        marginTop:5
      },
      text: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: "400",
      },
      navIcon: {
        position: "absolute",
        right: 5,
      },
})