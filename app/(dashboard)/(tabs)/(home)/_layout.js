import { GestureHandlerRootView } from 'react-native-gesture-handler';
/* import { Drawer } from 'expo-router/drawer'; */
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <GestureHandlerRootView>
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      </Stack>
      </GestureHandlerRootView>
  );
}
