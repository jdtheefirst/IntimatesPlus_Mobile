import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native"; // React Native Navigation
import { AppDispatch } from "../../redux/store"; // Assuming you're using Redux Toolkit
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/.expo/types/routes";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [forgotEmail, setForgotEmail] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Chats">;

  const navigation = useNavigation<NavigationProp>();

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert("Warning", "Please fill all the fields.");
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://your-api-endpoint/api/user/login", // Update this to your backend
        { email, password },
        config
      );
      // Use AsyncStorage instead of localStorage for React Native
      AsyncStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      navigation.navigate("Chats"); // Navigate to the chats screen
    } catch (error) {
      Alert.alert("Error", "Wrong email or password");
      setLoading(false);
    }
  };

  const forgotPassword = async () => {
    setSearching(true);
    setDisable(true);
    try {
      const { data } = await axios.get(
        `https://your-api-endpoint/api/user/account/${forgotEmail}`
      );
      if (data) {
        navigation.navigate("AccountRecovery");
        // Dispatch any Redux action for verification or update local state
      } else {
        Alert.alert("Info", "Email not found.");
      }
      setSearching(false);
      setTimeout(() => setDisable(false), 30000);
    } catch (error) {
      Alert.alert("Error", "An error occurred during password recovery.");
      setSearching(false);
      setTimeout(() => setDisable(false), 30000);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Login" onPress={submitHandler} disabled={loading} />
      {loading && <ActivityIndicator size="small" />}
      <Text
        onPress={() => forgotPassword()}
        style={{ color: "blue", marginTop: 10 }}
      >
        Forgot Password?
      </Text>
      {searching && <ActivityIndicator size="small" />}
    </View>
  );
};

export default Login;
