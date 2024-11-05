// navigation/types.ts
import { ParamListBase } from "@react-navigation/native";

export type AuthStackParamList = {
  Login: undefined; // No parameters
  Register: undefined; // No parameters
};

export type MainStackParamList = {
  Home: undefined; // No parameters
  Details: { id: string }; // Params for details screen
};

export type RootStackParamList = {
  Auth: undefined; // No parameters
  Home: undefined; // No parameters
};
