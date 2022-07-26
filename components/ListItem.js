import { styles } from "../Styles";
import { View, Text, Image } from "react-native";
import React from "react";

export default function Item({ title, url }) {
  console.log(url);
  return (
    <View>
      <Image source={{ uri: url }} />
      <Text>{title}</Text>
    </View>
  );
}
