import { View, Image, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, ActivityIndicator } from "@react-native-material/core";
import { styles } from "../Styles";
import HomeModal from "../components/welcomeModal";

const axios = require("axios");
import {
  REACT_APP_PUBLIC_KEY,
  REACT_APP_PRIVATE_KEY,
  API_STRING,
} from "../API";
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const md5 = require("md5");

export let searchedCharacter = {
  name: "",
  description: "",
  id: "",
  img: "",
  copyright: "",
  attributionHTML: "",
  attributionText: "",
  resourceURI: "",
  comics: "",
};

export default function HomeScreen({ navigation }) {
  const [character, setCharacter] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      //////////////////////
      // SET THE VARS
      ///////////////////////
      let ts = Date.now();
      let str = ts + API_STRING;
      let hash = md5(str);

      //////////////////////////
      // MAKE THE CALL
      //////////////////////////
      const getAxios = () => {};
      setLoading(true);
      axios
        .get("http://gateway.marvel.com/v1/public/characters", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          params: {
            name: character,
            ts: ts,
            apikey: REACT_APP_PUBLIC_KEY,
            hash: hash,
          },
        })
        .then(function (response) {
          // handle success
          // grab deets
          const { data, copyright, attributionText, attributionHTML } =
            response.data;
          const { results } = data;
          // console.log(results);
          const { name, description, id, thumbnail, resourceURI, comics } =
            results[0];
          const img = `${thumbnail["path"]}.${thumbnail["extension"]}`;
          // build obj with desired details
          searchedCharacter.name = name;
          searchedCharacter.id = id;
          searchedCharacter.description = description;
          searchedCharacter.img = img;
          searchedCharacter.resourceURI = resourceURI;
          searchedCharacter.copyright = copyright;
          searchedCharacter.attributionHTML = attributionHTML;
          searchedCharacter.attributionText = attributionText;
          searchedCharacter.comics = comics;
          // sanity check
          console.log(searchedCharacter);
          setQuery("");
          navigation.push("ShowScreen", { searchedCharacter, styles });
          setLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          return;
        });
    }
  }, [query]);

  ///////////////////////
  // RETURN
  ///////////////////////

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/1x/logo.png")}
        />
        <View style={{ backgroundColor: "transparent", marginTop: 50 }}>
          <TextInput
            style={{ margin: 15, outlineColor: "red" }}
            label="Search"
            variant="outlined"
            color="#ed1d24"
            name="search"
            placeholder="Search Character"
            onChangeText={(input) => setCharacter(input)}
            onSubmitEditing={(temp) => {
              setQuery(temp);
            }}
            trailing={(() => {
              if (loading) {
                return <ActivityIndicator size="large" color="#ed1d24" />;
              }
              return;
            })()}
          />
        </View>
        <View style={styles.container}>
          <HomeModal></HomeModal>
        </View>
      </ImageBackground>
    </View>
  );
}
