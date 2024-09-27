import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home: React.FC = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-secondary h-full">
      <Text className="text-2xl text-white font-psemibold">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
