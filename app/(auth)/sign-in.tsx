/// <reference types="nativewind/types" />

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, router } from "expo-router";
import { AppDispatch, setLogged, setUser } from "@/redux/store";
import { CustomButton, FormField } from "@/components/index";
import images from "@/constants/images";
import { ExternalLink } from "@/components/ExternalLink";

// Define the form structure type
interface FormState {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Type for dispatch function

  const [isSubmitting, setSubmitting] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email || form.password) {
      router.replace("/(tabs)/home");
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
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled" // Ensures taps on buttons work when keyboard is up
      >
        <View className="flex-1 justify-center items-center px-4">
          <Image
            source={images.IntimatesPlus}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
        </View>

        <View className="w-full flex justify-center px-4 my-6">
          <Text className="text-2xl font-bold text-white mt-10 font-psemibold text-center">
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
