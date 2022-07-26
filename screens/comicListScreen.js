import { View, Text, SafeAreaView, FlatList } from "react-native";
import Item from "../components/ListItem";
import { API_STRING, REACT_APP_PUBLIC_KEY } from "../API";
const md5 = require("md5");
const axios = require("axios");
import React from "react";
let ts = Date.now();
const hash = md5(ts + API_STRING);

// const call = `https:gateway.marvel.com:443/v1/public/characters${id}/comics?apikey=5e7742499ca16bad265a999cb23aa46f&ts=${ts}&hash=${hash}`;
//gateway.marvel.com:443/v1/public/characters/1009351/comics?apikey=5e7742499ca16bad265a999cb23aa46f

export default function ComicList({ navigation, route }) {
  let { comics, styles, id } = route.params;
  let get = axios
    .get(`https:gateway.marvel.com:443/v1/public/characters/${id}/comics`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      params: {
        ts: ts,
        apikey: REACT_APP_PUBLIC_KEY,
        hash: hash,
      },
    })
    .then((response) => {
      console.log(response);
    });

  //   const renderItem = ({ item }) => <Item title={item.title} />;
  const renderItem = ({ item }) => (
    <Item
      title={item.name}
      style={{ fontFamily: "Comic_Book" }}
      //   trailing={(props) => <Icon name="chevron-right" {...props} />}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comics}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}
