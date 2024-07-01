import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { baseUrl } from "../../constants/api/apiClient";
import { useAuth } from "../../AuthContext/AuthContext";
import { router } from "expo-router";
import axios from "axios";

const PaymentSelection = ({
  address,
  state,
  city,
  country,
  phoneNumber,
  totalAmount,
  fullName,
}) => {
  const [selectedPaymentType, setSelectedPaymentType] = useState("Fiat");
  const [selectedPaymentDetail, setSelectedPaymentDetail] = useState(null);
  const [amount, setAmount] = useState(totalAmount);
  const { token, tTy } = useAuth();

  const paymentdetails = [
    {
      type: "crypto",
      icon: require("../../assets/digital/mcgp.png"),
      walletAddress: "0xaF326D5D242C9A55590540f14658adDDd3586A8d",
      symbol: "MCGP",
      network: "Fantom",
      id: "6682a0ece932930008cde674",
    },
    {
      type: "crypto",
      icon: require("../../assets/icons/usdt.png"),
      walletAddress: "TEG9qJ1sLi38nwCqmu6mrpDKqebvd5464N",
      symbol: "USDT",
      network: "Trc20",
      id: "6682a116e932930008cde677",
    },
    {
      type: "fiat",
      icon: require("../../assets/icons/bank.png"),
      accountNumber: "1234567890",
      bankName: "Monie Point",
      accountName: "MCGP",
      id: "6682a116e932930008cde677",
    },
  ];

  const getSelectedPaymentDetails = () => {
    return paymentdetails.filter((payment) => {
      if (selectedPaymentType === "Fiat" && payment.type === "fiat")
        return true;
      if (selectedPaymentType === "Crypto" && payment.type === "crypto")
        return true;
      return false;
    });
  };

  const placeOrder = async (payLoad) => {
    try {
      const response = await axios.post(`${baseUrl}/order`, payLoad, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        return { data: response.data, message: "success", success: true };
      }
    } catch (error) {
      return {
        data: "",
        message: error.response?.data?.message,
        success: false,
      };
    }
  };

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
              onPress={() => {
                setSelectedPaymentType("Fiat");
                setSelectedPaymentDetail(null);
              }}
            >
              <Text style={styles.toggleButtonText}>Fiat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                selectedPaymentType === "Crypto" && styles.selectedToggleButton,
              ]}
              onPress={() => {
                setSelectedPaymentType("Crypto");
                setSelectedPaymentDetail(null);
              }}
            >
              <Text style={styles.toggleButtonText}>Crypto</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          editable={false}
        />
        {getSelectedPaymentDetails().map((payment, index) => (
          <TouchableOpacity
            style={styles.itemContainer}
            key={index}
            onPress={() => setSelectedPaymentDetail(payment)}
          >
            <Image
              source={payment.icon}
              style={styles.iconStyle}
              resizeMode="contain"
            />
            <Text style={styles.itemText}>
              {selectedPaymentType === "Fiat"
                ? `${payment.bankName} - ${payment.accountName}`
                : `${payment.symbol} - ${payment.network}`}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.button]}
          onPress={async () => {
            if (!selectedPaymentDetail) {
              alert("Please select a payment method.");
              return;
            }
            const result = await placeOrder({
              deliveryAddress: {
                address,
                state,
                city,
                country,
                phoneNumber,
                fullName,
              },
              paymentMethod: selectedPaymentType.toLowerCase(),
            });
            console.log(selectedPaymentDetail);
            if (result.success) {
              if (selectedPaymentType === "Fiat") {
                router.push({
                  pathname: "/paymentdetail",
                  params: {
                    bankName: result.data.selectedPaymentDetail.bankName,
                    accountName: result.data.selectedPaymentDetail.accountName,
                    accountNumber:
                      result.data.selectedPaymentDetail.accountNumber,
                    id: result.data.id,
                  },
                });
              } else {
                router.push({
                  pathname: "/cryptodetails",
                  params: {
                    walletAddress: result.data.paymentDetails.walletAddress,
                    network: result.data.paymentDetails.network,
                    symbol: result.data.paymentDetails.symbol,
                    id: result.data.id,
                  },
                });
              }
            } else {
              alert(result.message);
            }
          }}
          /*  disabled={loading} */
        >
          <Text style={styles.buttonText}>
            {tTy ? "Pay System Fee" : "Buy Product"}
          </Text>
        </TouchableOpacity>
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
