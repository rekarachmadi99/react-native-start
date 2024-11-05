// screens/Auth/RegisterScreen.tsx
import React from "react";
import { View, Text, Button, TextInput } from "react-native";

const RegisterScreen: React.FC = () => {
  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Register" onPress={() => {}} />
    </View>
  );
};

export default RegisterScreen;
