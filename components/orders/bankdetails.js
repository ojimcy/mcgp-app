import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import { router } from "expo-router";

const BankDetails = ({ accountNumber, accountName, bankName }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
      }}
    >
      <View style={{ marginTop: 200 }}>
        <View style={styles.bankDetails}>
          <Text style={styles.labelText}>Bank Name</Text>
          <Text style={styles.valueText}>{bankName || "Access Bank"}</Text>
        </View>
        <View style={styles.bankDetails}>
          <Text style={styles.labelText}>Account Number</Text>
          <Text style={styles.valueText}>{accountNumber || "0049005958"}</Text>
        </View>
        <View style={styles.bankDetails}>
          <Text style={styles.labelText}>Account Name</Text>
          <Text style={styles.valueText}>
            {accountName || "Tsenongo Jacob"}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            router.push("/paymentproof");
          }}
        >
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  bankDetails: {
    width: SIZES.width * 0.9,
    height: (6.2 / 100) * SIZES.height,
    borderColor: "gray",
    marginHorizontal: SIZES.width * 0.05,
    backgroundColor: COLORS.gray,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 1,
  },
  labelText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9C9C9C",
    paddingLeft: 10,
  },
  valueText: {
    paddingRight: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9,
    alignItems: "center",
    justifyContent: "center",
    height: 0.05042918 * SIZES.height,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginHorizontal: SIZES.width * 0.05,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
