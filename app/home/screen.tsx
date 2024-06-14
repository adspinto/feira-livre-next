import React from "react";
import { Text, View } from "react-native";
import { MyAwesomeMap } from "ui/components/map";

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text style={{ fontWeight: "800" }}>Welcome to Solito.</Text>
      <MyAwesomeMap />
    </View>
  );
}
