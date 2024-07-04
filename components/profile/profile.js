import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Clipboard,
  Alert,
} from "react-native";
import { Avatar, Icon, Card } from "react-native-elements";
import { useAuth } from "../../AuthContext/AuthContext";
import { router } from "expo-router";
import axios from "axios";
import { baseUrl } from "../../constants/api/apiClient";
import Toast from "react-native-toast-message";

const ProfileScreen = () => {
  const { logOut, token } = useAuth();
  const [user, setUser] = useState();

  async function getLoggedInUser() {
    try {
      const { data } = await axios.get(`${baseUrl}/users/me`, {
        headers: {
          Authorization: `${token}`,
        },
      });
      setUser(data);
    } catch (error) {
      alert(error?.response.data.message);
    }
  }

  useEffect(() => {
    if (token) {
      getLoggedInUser();
    }
  }, [token]);

  const copyToClipboard = () => {
    Clipboard.setString(user?.referralCode);
    Alert.alert("Copied to clipboard", "Referral code copied to clipboard!");
  };

  const handleVerifyEmail = async () => {
    try {
      await axios.post(
        `${baseUrl}/auth/send-verification-email`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      router.push("/profile/verify-email");
    } catch (error) {
      console.log(error?.response?.data?.message);
      Alert.alert("An error occurred while sending verification email.");
    }
  };

  const handleKycVerification = () => {
    // router.push("/profile/kyc");
      Alert.alert("Coming Soon!!!");
  };

  return (
    <View style={styles.container}>
      {!user ? (
        <ActivityIndicator size={24} />
      ) : (
        <>
          <Card containerStyle={styles.card}>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() =>
                router.push({ pathname: "/profile/edit", params: user })
              }
            >
              <Icon name="edit" size={20} color="#9D6B38" />
            </TouchableOpacity>
            <View style={styles.profileInfo}>
              {user?.profilePicture ? (
                <Avatar
                  rounded
                  source={{ uri: user?.profilePicture }}
                  size="large"
                />
              ) : (
                <Avatar
                  rounded
                  title={user.name[0]}
                  size="large"
                  overlayContainerStyle={{ backgroundColor: "#9D6B38" }}
                  titleStyle={{ color: "#fff" }}
                />
              )}
              <View style={styles.textInfo}>
                <Text style={styles.fullName}>{user.name}</Text>
                <Text style={styles.phoneNumber}>{user?.phoneNumber}</Text>
              </View>
            </View>

            {!user.isEmailVerified ? (
              <TouchableOpacity
                style={styles.verificationButton}
                onPress={handleVerifyEmail}
              >
                <Icon name="mail" size={20} color="#FFFFFF" />
                <Text style={styles.verificationText}>Verify Email</Text>
              </TouchableOpacity>
            ) : !user.isKycVerified ? (
              <TouchableOpacity
                style={styles.verificationButton}
                onPress={handleKycVerification}
              >
                <Icon name="account-box" size={20} color="#FFFFFF" />
                <Text style={styles.verificationText}>
                  Complete KYC Verification
                </Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.verifiedContainer}>
                <Icon name="verified" size={20} color="green" />
                <Text style={styles.verifiedText}>Verified</Text>
              </View>
            )}
          </Card>
          <View style={styles.linksContainer}>
            <TouchableOpacity
              style={styles.profileLink}
              onPress={() => router.push("/myAdverts")}
            >
              <Icon name="description" size={20} color="#9D6B38" />
              <Text style={styles.linkText}>My Adverts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLink}
              onPress={() => router.push("/orderlist")}
            >
              <Icon name="list" size={20} color="#9D6B38" />
              <Text style={styles.linkText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLink}>
              <Icon name="favorite" size={20} color="#9D6B38" />
              <Text style={styles.linkText}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLink}>
              <Icon name="account-balance-wallet" size={20} color="#9D6B38" />
              <View style={styles.balanceRow}>
                <Text style={styles.balance}>{user?.balance} USD</Text>
                <Text style={styles.balanceText}>My Balance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLink}>
              <Icon name="share" size={20} color="#9D6B38" />
              <View style={styles.referralRow}>
                <Text style={styles.referralCode}>{user?.referralCode}</Text>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={copyToClipboard}
                >
                  <Text style={styles.copyButtonText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLink} onPress={logOut}>
              <Icon name="exit-to-app" size={20} color="#9D6B38" />
              <Text style={styles.linkText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    width: "94%",
    height: 217,
    backgroundColor: "#F5FCFF",
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  profileInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textInfo: {
    marginLeft: 15,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#666",
  },
  linksContainer: {
    marginTop: 20,
    minHeight: 300,
  },
  profileLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderRadius: 10,
  },
  linkText: {
    marginLeft: 10,
    fontSize: 16,
  },
  balance: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceRow: {
    marginLeft: 15,
  },
  balanceText: {
    fontSize: 14,
  },
  referralCode: {
    fontSize: 16,
    marginLeft: 15,
  },
  referralRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  copyButton: {
    marginLeft: 10,
    backgroundColor: "#9D6B38",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  copyButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  verificationButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9D6B38",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  verificationText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
  verifiedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#e0ffe0",
  },
  verifiedText: {
    color: "green",
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ProfileScreen;
