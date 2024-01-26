import { View, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnboardingScreen">;
}

export default function OnbordingScreen({navigation}: NavigationProps) {
  return (
    <View>
      <Text>OnbordingScreen</Text>
    </View>
  );
}
