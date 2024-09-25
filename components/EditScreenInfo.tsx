import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";
import { Redirect, router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity
          onPress={() => router.push("/sign-in")} // Programmatic redirection to the root "/"
          className="mt-4 py-4" // NativeWind classes for styling
        >
          <Text className="text-blue-600 text-center">sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
