import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams, Stack } from "expo-router";

const profile = () => {
  const router = useRouter();

  // To receive all params
  //   const params = useSearchParams();
  //   console.log(params);

  // To display name and lastname from params
  const { name, username } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#1E2632" },
          headerTintColor: "#FFE030",
        }}
      />

      <Text style={{ fontSize: 30 }}>
        Hello {name} (@{username})
      </Text>

      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
};

export default profile;
