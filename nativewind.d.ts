import "react-native";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface SafeAreaViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }

  // Add other components as needed
}
