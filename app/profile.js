import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";

const profile = () => {
  const router = useRouter();

  // To receive all params
  //   const params = useSearchParams();
  //   console.log(params);

  // To display name and lastname from params
  const { name, lastname } = useSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>Hello {name}</Text>

      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
};

export default profile;
