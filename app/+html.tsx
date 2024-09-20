/// <reference types="nativewind/types" />

import { ScrollViewStyleReset } from "expo-router/html";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* 
          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native. 
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Using raw CSS styles as an escape-hatch to ensure the background color never flickers in dark-mode. */}
        <style dangerouslySetInnerHTML={{ __html: responsiveBackground }} />
        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>
        <SafeAreaView className="bg-primary h-full">
          <ScrollView
            contentContainerStyle={{
              height: "100%",
            }}
          >
            <View className="w-full flex justify-center items-center h-full px-4">
              <View className="relative mt-5">
                <Text className="text-3xl text-white font-bold text-center">
                  Discover Endless{"\n"}
                  Possibilities with{" "}
                  <Text className="text-secondary-200">Aora</Text>
                </Text>
              </View>

              <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                Where Creativity Meets Innovation: Embark on a Journey of
                Limitless Exploration with Aora
              </Text>
            </View>
          </ScrollView>

          <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
      </body>
    </html>
  );
}

const responsiveBackground = `
body {
  background-color: #fff;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: #000;
  }
}`;
