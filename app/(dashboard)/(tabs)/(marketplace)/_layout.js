import {
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { COLORS } from "../../../../constants";

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
<MaterialTopTabs.Screen name="products" options={{title:'Products'}} />
<MaterialTopTabs.Screen name="service" options={{title:'Services'}}/>
<MaterialTopTabs.Screen name="digital" options={{title:'Digital'}}/>
</MaterialTopTabs>

);
}
