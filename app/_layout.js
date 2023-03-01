import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";

export default () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFE030",
        },
        headerTintColor: "#1E2632",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <AntDesign
            onPress={() => Alert.alert("More information")}
            name="infocirlceo"
            size={24}
            color="black"
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
};
