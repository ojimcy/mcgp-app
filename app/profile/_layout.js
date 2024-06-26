import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="edit"
        options={{
          title: "Edit Profile",
        }}
      />
      <Stack.Screen
        name="edit-advert"
        options={{
          title: "Edit Advert",
        }}
      />
      <Stack.Screen
        name="advert-details"
        options={{
          title: "Advert Details",
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;
