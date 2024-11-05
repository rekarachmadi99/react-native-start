// navigation/AuthNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "./types";
import { LoginScreen, RegisterScreen } from "../screens";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
