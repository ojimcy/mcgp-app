import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { COLORS } from "../../constants";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Layout = () => {
  return (
    <>
      <Toast />
      <Drawer
        screenOptions={({ route, navigation }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "addcategory":
                iconName = "clipboard-list";
                break;
              case "Inbox":
                iconName = "email";
                break;
              case "Pending Reviews":
                iconName = "comment-processing";
                break;
              case "Voucher":
                iconName = "ticket-percent";
                break;
              case "Saved Items":
                iconName = "heart";
                break;
              case "Followed Sellers":
                iconName = "account-heart";
                break;
              case "Recently Viewed":
                iconName = "eye";
                break;
              case "(tabs)":
                iconName = "account-cog";
                break;
              default:
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerTintColor: navigation.isFocused() ? COLORS.primary : "black",
        })}
      >
        <Drawer.Screen
          name="(tabs)"
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Image
                source={require("../../assets/images/person01.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  marginRight: 10,
                }}
              />
            ),
            headerTitle: "TSA Connect",
            title: "Main Menu",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 14, // Reduce font size
              color: navigation.isFocused() ? COLORS.primary : "black", // Change font color
            },
            headerTintColor: navigation.isFocused() ? COLORS.primary : "black",
            drawerActiveTintColor:COLORS.primary,
            /* drawerLabel:'Show' */
          })}
          /* {{
            headerRight: () => (
              <Image
              source={require("../../assets/images/person01.png")}
              style={{ width: 30, height: 30, resizeMode:"contain",marginRight:10 }}
            />
            ), 
            headerTitle:'TSA Connect',
            title: 'Main Menu',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 16, // Reduce font size
                color: COLORS.primary, // Change font color
              },
             
          }} */
        />
        <Drawer.Screen
          name="addcategory"
          options={{
            title: "Add Category",
          }}
        />
      </Drawer>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
