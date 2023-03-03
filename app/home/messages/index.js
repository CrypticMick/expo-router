import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Messages = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href={"home/messages/messageRoom"}>Messages with Snoop Dogg</Link>

      <Link href={"home/messages/messageRoom"}>Messages with Nate Dogg</Link>
    </View>
  );
};

export default Messages;
