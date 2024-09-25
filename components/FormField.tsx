import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TextInputProps,
} from "react-native";
import icons from "@/constants/icons";

// Define the props structure for FormField
interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string; // Optional for extra styling
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  handleChangeText,
  otherStyles = "",
  ...props
}) => {
  // Specify the type for showPassword state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPasswordField = title === "Password";

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={isPasswordField && !showPassword} // Toggle visibility based on state
          {...props} // Forward remaining TextInput props
        />

        {/* If it's the password field, show the toggle icon */}
        {isPasswordField && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide} // Adjust the path to your icons
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
