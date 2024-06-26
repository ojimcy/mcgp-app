import { Stack } from 'expo-router';

const ProfileLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="edit" />
      <Stack.Screen name="my-adverts" />
      <Stack.Screen name="advert-detail" />
    </Stack>
  );
};

export default ProfileLayout;
