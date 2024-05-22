//import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Intro";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import LoginScreen from "./screens/LoginScreen";
import RecoveryScreen from "./screens/RecoveryScreen";
import RecoveryOTP from "./components/onboarding/RecoveryOTP";
import Signup from "./components/onboarding/Signup";
import Verify from "./components/onboarding/Verify";
import HomeScreen from "./screens/Home";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function Main() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="OTP" component={RecoveryOTP} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Dashboard" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
