import React, { useState } from "react";
import { ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import CaseInterface from "../interface/case.interface";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet } from "react-native";
import { emptyCase } from "../utils/emptyCase";
import axios from "axios";

interface NavigationProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ReportScreen">;
}

const ReportScreen = ({ navigation }: NavigationProps) => {
  const [caseData, setCaseData] = useState<CaseInterface>(emptyCase);

  const handleInputChange = (
    field: keyof CaseInterface,
    value: string | number
  ) => {
    setCaseData({
      ...caseData,
      [field]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://sahakshak-backend.vercel.app/api/cases",
        caseData
      );

      if (response.status === 201) {
        navigation.navigate("OtpScreen");
      }
    } catch (error) {
      console.error("Error:", error.response);
    }
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Title"
        value={caseData.title}
        onChangeText={(value) => handleInputChange("title", value)}
      />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        label="Description"
        value={caseData.description}
        onChangeText={(value) => handleInputChange("description", value)}
      />
      <TextInput
        label="Name"
        mode="outlined"
        style={styles.textInput}
        value={caseData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        mode="outlined"
        label="Age"
        value={String(caseData.age)}
        onChangeText={(value) => handleInputChange("age", parseInt(value))}
        style={styles.textInput}
        keyboardType="numeric"
      />
      <TextInput
        label="Phone Number"
        mode="outlined"
        style={styles.textInput}
        value={caseData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.textInput}
        value={caseData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
      />
      <TextInput
        mode="outlined"
        style={styles.textInput}
        label="Address"
        value={caseData.address}
        onChangeText={(value) => handleInputChange("address", value)}
      />
      <TextInput
        mode="outlined"
        label="Pin Code"
        style={styles.textInput}
        value={caseData.pinCode}
        onChangeText={(value) => handleInputChange("pinCode", value)}
        keyboardType="numeric"
      />
      <TextInput
        label="Time of Crime(DD/MM/YYYY)"
        mode="outlined"
        value={caseData.timeOfCrime.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
        onChangeText={(value) => handleInputChange("timeOfCrime", value)}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        label="Suspect(If Any)"
        mode="outlined"
        value={caseData.suspect}
        onChangeText={(value) => handleInputChange("suspect", value)}
        style={styles.textInput}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.buttonStyle}
      >
        Submit
      </Button>
    </ScrollView>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    marginStart: 12,
    marginEnd: 12,
  },
  buttonStyle: {
    backgroundColor: "#231212",
    margin: 5,
    marginStart: 12,
    marginEnd: 12,
    borderRadius: 4,
    padding: 4,
  },
});
