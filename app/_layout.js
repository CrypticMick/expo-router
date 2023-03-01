import { Stack, useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default () => {
  const router = useRouter();

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
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
            <AntDesign
              onPress={() => router.push("/modal")}
              name="infocirlceo"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerStyle: { backgroundColor: "#1E2632" },
          headerTintColor: "#FFE030",
        }}
      />
    </Stack>
  );
};
