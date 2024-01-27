import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Surface, Button } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnboardingScreen">;
}

export default function OnbordingScreen({ navigation }: NavigationProps) {
  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <Surface style={styles.container}>
      <TextInput mode="outlined" label="Enter Email" />
      <TextInput mode="outlined" label="Enter Password" />
      <Button onPress={handlePress} mode="contained">
        Sumbit
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
