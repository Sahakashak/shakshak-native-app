import { View, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "OtpScreen">;
}

export default function OtpScreen({navigation}: NavigationProps) {
  return (
    <View>
      <Text>OtpScreen</Text>
    </View>
  );
}
