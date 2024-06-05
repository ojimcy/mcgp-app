import {
      createMaterialTopTabNavigator,
    } from "@react-navigation/material-top-tabs";
    import { withLayoutContext } from "expo-router";
    
    const { Navigator } = createMaterialTopTabNavigator();
    
    export const MaterialTopTabs = withLayoutContext(Navigator );
    
    import { Stack } from "expo-router";
//const MaterialTopTab = createMaterialTopTabNavigator();
export default function Layout() {
  return (
    <Stack>
    <Stack.Screen name="serviceshome" options={{title:"Services",headerTitleAlign:'center'}} />
    <Stack.Screen name="serviceaction" options={{title:"Add Product"}} />
    
  </Stack>
  );
}
