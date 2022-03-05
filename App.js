import React from "react";
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
//   measurementId: "G-measurement-id",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA_B5fYgdYpUHZ87zoxifqZ2WS-cwiEs24",
  authDomain: "mealstogo-8224e.firebaseapp.com",
  projectId: "mealstogo-8224e",
  storageBucket: "mealstogo-8224e.appspot.com",
  messagingSenderId: "513367476372",
  appId: "1:513367476372:web:8573ebb322a66920becc81",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      {/* <ExpoStatusBar style="auto" /> */}
    </>
  );
}
