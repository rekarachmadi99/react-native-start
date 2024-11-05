// types/navigationTypes.ts

import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined; // Home screen, no params
  Login: undefined; // Login screen, no params
  // Add more screens as necessary
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};
