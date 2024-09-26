/// <reference types="nativewind/types" />

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, router } from "expo-router";
import { AppDispatch } from "@/redux/slices/chatSlice"; // Adjust the path as per your store location
import { setLogged, setUser } from "@/redux/slices/chatSlice";
import { CustomButton, FormField } from "@/components/index"; // Adjust path to components
import images from "@/constants/images";
import { ExternalLink } from "@/components/ExternalLink";

// Define the form structure type
interface FormState {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Type for dispatch function

  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email || form.password) {
      router.replace("/(tabs)");
      return;
    }

    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return; // Avoid proceeding if fields are empty
    }

    setSubmitting(true);

    try {
      // Simulating API call - ensure your endpoint is correctly set up
      const result = await axios.post("/api/user/login", {
        email: form.email,
        password: form.password,
      });

      dispatch(setUser(result.data)); // Assuming result.data contains user information
      dispatch(setLogged(true)); // Set user as logged in

      Alert.alert("Success", "User signed in successfully");
      router.replace("/(tabs)"); // Navigate to tabs screen after login
    } catch (error: any) {
      Alert.alert("Error", error.response?.data?.message || error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.IntimatesPlus}
            resizeMode="contain"
            className="w-[60px] h-[60px]"
          />

          <Text className="text-2xl font-bold text-white mt-10 font-psemibold">
            Log in to IntimatesPlus
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry // Hide password characters
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>

            <ExternalLink href="https://fuckmate.boo">Signup</ExternalLink>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
