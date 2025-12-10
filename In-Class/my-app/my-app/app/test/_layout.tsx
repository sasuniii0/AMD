import { Link, Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View className="flex-1 justify-between">
      <Slot />
      {/* Footer */}
      <View className="bg-gray-200 p-4">
        <Text className="text-center font-bold mb-2 mt-0 pb-2 border-b border-gray-400">
          This is footer section - Navigation Links
        </Text>

        {/* Navigation links */}
        <View className="flex-row justify-around mt-2">
          <Link href={"/test" as any}>
            <Text className="text-blue-600 font">Test</Text>
          </Link>

          <Link href="/home">
            <Text className="text-blue-600 font">Home</Text>
          </Link>

          <Link href="/test/sample">
            <Text className="text-blue-600 font">Sample</Text>
          </Link>

          <Link href={"/test/123" as any}>
            <Text className="text-blue-600 font">ID</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default RootLayout;
