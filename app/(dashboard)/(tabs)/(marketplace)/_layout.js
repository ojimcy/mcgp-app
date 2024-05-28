import {
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { COLORS } from "../../../../constants";
import { SafeAreaView } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator );


//const MaterialTopTab = createMaterialTopTabNavigator();
export default function Layout() {
return (

<MaterialTopTabs screenOptions={
  {
    tabBarGap: -10,
    tabBarActiveTintColor:COLORS.black,
    tabBarLabelStyle:{
fontWeight:'bold',
textTransform:'capitalize'
    },
    tabBarIndicatorStyle:{
      backgroundColor:COLORS.lightButton
    },
    tabBarContentContainerStyle: {
      alignItems: 'center', // Align items to the left
    },
  }
}>
<MaterialTopTabs.Screen name="marketplace" options={{title:'Favorites'}} />
<MaterialTopTabs.Screen name="products" />
<MaterialTopTabs.Screen name="digital" />
</MaterialTopTabs>

);
}
