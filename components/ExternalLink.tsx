import React from "react";
import {
  Platform,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
}) => {
  const handlePress = async (e: GestureResponderEvent) => {
    if (Platform.OS !== "web") {
      e.preventDefault();
      // Open the link in an in-app browser
      await WebBrowser.openBrowserAsync(href);
    } else {
      // For web, let the default behavior happen (opens in a new tab)
      window.open(href, "_blank");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text className="text-lg font-psemibold text-secondary text-center w-full py-2 px-2">
        {children}
      </Text>
    </TouchableOpacity>
  );
};
