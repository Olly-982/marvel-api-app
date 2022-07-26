import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { useFonts } from "expo-font";
// LOCAL IMPORT INCLUDES
// NAVIGATION STUFF
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/homeScreen";
import ShowScreen from "./screens/showScreen";
import ComicList from "./screens/comicListScreen";
// STYLE STUFF
import { styles } from "./Styles";
const font = require("./assets/fonts/Comic_Book.otf");

export default function App() {
  const [loaded] = useFonts({
    Comic_Book: require("./assets/fonts/Comic_Book.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <View style={styles.statbar}></View>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ShowScreen" component={ShowScreen} />
          <Stack.Screen name="ComicList" component={ComicList} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
