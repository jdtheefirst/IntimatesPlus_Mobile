/// <reference types="nativewind/types" />

import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: string; // Tailwind class for styling
  textStyles?: string; // Tailwind class for text styling
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles = "", // Default empty string if no styles passed
  textStyles = "",
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
