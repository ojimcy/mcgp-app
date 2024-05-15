import { View, StyleSheet, Text } from "react-native";
import Products from "../components/onboarding/products";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
     <Products navigation={navigation}/>
    </View>
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
