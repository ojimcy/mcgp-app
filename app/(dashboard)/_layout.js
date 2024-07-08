import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { COLORS } from "../../constants";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { useAuth } from "../../AuthContext/AuthContext";
import { Avatar } from "react-native-elements";
const Layout = () => {
  const { currentUser } = useAuth();
 
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
              case "profile":
                iconName = "account-cog";
                break;
              case "myAdverts":
                iconName = "shopping";
                break;
              case "Pending Reviews":
                iconName = "comment-processing";
                break;
              case "orderlist":
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
                iconName = "home";
                break;
              default:
                break;
            }
            return (
              <Icon
                name={iconName}
                size={25}
                color={color}
                style={{ marginVertical: -5 }}
              />
            );
          },
          headerTintColor: navigation.isFocused() ? COLORS.primary : "black",
          /*  drawerPosition:'right', */
          drawerLabelStyle: {
            marginHorizontal: -20,
            fontSize: 16,
            padding: -20,
          },
          itemStyle: {
            marginVertical: 0, // Adjust the vertical margin here
          },
          drawerContentContainerStyle: {
            justifyContent: "center",
          },
        })}
      >
        <Drawer.Screen
          name="(tabs)"
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => {
                  router.push("/profile");
                }}
                style={styles.avatarContainer}
              >
                {currentUser && currentUser?.profilePicture ? (
                  <Avatar
                    rounded
                    source={{ uri: currentUser?.profilePicture }}
                    size="small"
                    containerStyle={styles.avatar}
                  />
                ) : (
                  <Avatar
                    rounded
                    title={currentUser?.name[0]}
                    size="small"
                    overlayContainerStyle={{ backgroundColor: "#9D6B38" }}
                    containerStyle={styles.avatar}
                  />
                )}
              </Pressable>
            ),
            headerTitle: "TSA Connect",
            title: "Dashboard",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16, // Reduce font size
              color: navigation.isFocused() ? COLORS.primary : "black", // Change font color
            },
            headerTintColor: navigation.isFocused() ? COLORS.primary : "black",
            drawerActiveTintColor: COLORS.primary,
          })}
        />
        <Drawer.Screen
          name="orderlist"
          options={{
            title: "My Orders",
            drawerActiveTintColor: COLORS.primary,
          }}
        />
        <Drawer.Screen
          name="myAdverts"
          options={{
            title: "My Adverts",
            drawerActiveTintColor: COLORS.primary,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Profile",
            drawerActiveTintColor: COLORS.primary,
          }}
        />
          <Drawer.Screen
            name="addcategory"
            options={{
              title: "Add Category",
              drawerActiveTintColor: COLORS.primary,
            }}
          />
       
      </Drawer>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  avatar: {
    marginRight: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
