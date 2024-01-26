import { View, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
}

export default function HomeScreen({ navigation }: NavigationProps) {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}
