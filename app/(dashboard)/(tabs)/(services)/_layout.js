import {
      createMaterialTopTabNavigator,
    } from "@react-navigation/material-top-tabs";
    import { withLayoutContext } from "expo-router";
    
    const { Navigator } = createMaterialTopTabNavigator();
    
    export const MaterialTopTabs = withLayoutContext(Navigator );
    

//const MaterialTopTab = createMaterialTopTabNavigator();
export default function Layout() {
  return (
    <MaterialTopTabs>
    <MaterialTopTabs.Screen name="serviceshome" />
    <MaterialTopTabs.Screen name="servicedetails" />
  </MaterialTopTabs>
  );
}
