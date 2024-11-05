// navigation/HomeNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "./types";
import { HomeScreen } from "../screens";
import DetailsScreen from "../screens/Main/DetailsScreen";

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
