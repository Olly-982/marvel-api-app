import {
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "@react-native-material/core";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
import React from "react";

export default function ShowScreen({ navigation, route }) {
  let { searchedCharacter, styles } = route.params;
  // console.log(searchedCharacter.comics.items);
  let comics = searchedCharacter.comics.items;
  let { id } = searchedCharacter;
  // console.log(comics);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: searchedCharacter.img }}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={{ backgroundColor: "#ed1d24" }}>
          <Text
            style={styles.characterTitle}
            variant="h2"
          >
            {searchedCharacter.name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#FFD602",
              marginLeft: "auto",
              fontFamily: "Comic_Book",
              marginTop: -15,
              marginBottom: 5,
              marginRight: 15,
            }}
          >
            {searchedCharacter.attributionText}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: "flex-end"}}>
          <AppButton
            style={{marginBottom: 20, marginLeft: "auto", marginRight: 20,}}
            title="Comics"
            onPress={() => navigation.push("ComicList", { comics, styles, id })}
          />
        </View>
        {searchedCharacter.description ? (
          <SafeAreaProvider
            style={{
              maxHeight: 200,
              marginTop: "auto",
            }}
          >
            <ScrollView>
              <Text style={styles.characterDesc}>
                {searchedCharacter.description}
              </Text>
            </ScrollView>
          </SafeAreaProvider>
        ) : (
          <Text style={styles.characterDesc}>
            Sorry, no description available :(
          </Text>
        )}
      </ImageBackground>
    </View>
  );
}
