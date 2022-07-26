import { Modal, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../Styles";
import { Button, Text } from "@react-native-material/core";
import AppButton from "../components/AppButton";

export default function HomeModal() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            <Text variant="h6" style={styles.modalHeading}>
              Welcome to Heroes and Villains!{"\n\n"}
            </Text>
            With this app you can find any and all information about your
            favorite Marvel Characters. Just search for a character and start
            digging into the details.{"\n\n"}
            <Text style={{ fontSize: 10 }}>
              **THIS IS NOT A COMMERCIAL PRODUCT{"\n"}
              **IT HAS NO AFFILIATION WITH MARVEL{"\n"}
              **JUST A FUN PROJECT USING THERE API{"\n"}
            </Text>
          </Text>
          <AppButton
            title="Got it!"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </Modal>
  );
}
