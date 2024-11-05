// screens/Auth/LoginScreen.tsx
import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useAuth } from "../../hooks";

const LoginScreen: React.FC = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Dummy login function
    login({ name: "User" });
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
