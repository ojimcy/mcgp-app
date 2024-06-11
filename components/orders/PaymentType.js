import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants";

const PaymentSelection = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState("Fiat");
  const [amount, setAmount] = useState("");
  function Continue() {}

  return (
    <View style={styles.cover}>
      <View style={{ marginTop: 40 }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: SIZES.width * 0.60217,
              height: SIZES.height * 0.06686695,
              backgroundColor: "#DDA15E",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#DDA15E",
              marginBottom: 50,
              borderRadius: 3,
            }}
          >
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedPaymentType === "Fiat" && styles.selectedToggleButton,
              ]}
              onPress={() => setSelectedPaymentType("Fiat")}
            >
              <Text style={styles.toggleButtonText}>Fiat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedPaymentType === "Crypto" && styles.selectedToggleButton,
              ]}
              onPress={() => setSelectedPaymentType("Crypto")}
            >
              <Text style={styles.toggleButtonText}>Crypto</Text>
            </TouchableOpacity>
          </View>
        </View>
        {selectedPaymentType === "Fiat" && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <View style={styles.itemContainer}>
              <Image
                source={require("../../assets/icons/bank.png")}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.itemText}>Bank Transfer</Text>
            </View>
            <TouchableOpacity
              style={[styles.button]}
              onPress={Continue}
              /*  disabled={loading} */
            >
              <Text style={styles.buttonText}>Buy Product</Text>
            </TouchableOpacity>
          </>
        )}
        {selectedPaymentType === "Crypto" && (
          <>
             <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <View style={styles.itemContainer}>
              <Image
                source={require("../../assets/icons/usdt.png")}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.itemText}>USDT</Text>
            </View>
            <TouchableOpacity
              style={[styles.button]}
              onPress={Continue}
              /*  disabled={loading} */
            >
              <Text style={styles.buttonText}>Buy Product</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={{ alignItems: "center" }}></View>
    </View>
  );
};

export default PaymentSelection;

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

  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#DDA15E",
    alignItems: "center",
    borderRadius: 5,
    margin: 3,
  },
  selectedToggleButton: {
    backgroundColor: "#fff",
  },
  toggleButtonText: {
    color: "#000",
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
    width: SIZES.width * 0.9,
    height: (6.2 / 100) * SIZES.height,
    backgroundColor: "#FFF4E8",
    marginHorizontal: SIZES.width * 0.05,
    borderRadius: 5,
  },
  iconStyle: {
    margin: 10,
    resizeMode: "contain",
  },
  itemText: {
    fontSize: 16,
  },
  
});
