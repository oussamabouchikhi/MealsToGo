import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

const Stack = createStackNavigator();
export const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={createScreenOptions}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};
