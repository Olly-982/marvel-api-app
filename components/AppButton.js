import { Text, Pressable } from "@react-native-material/core";
import { styles } from "../Styles";
import React from "react";

export default function AppButton({ title, onPress, style }) {
  return (
    <Pressable style={[styles.button, { ...style }]} onPress={onPress}>
      <Text style={styles.appButton}>{title}</Text>
    </Pressable>
  );
}
