import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer>
      <Drawer.Screen
        name="serviceshome" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Services',
          title: 'Services',
        }}
      />
    </Drawer>
  </GestureHandlerRootView> 
  )
}

export default Layout

const styles = StyleSheet.create({})