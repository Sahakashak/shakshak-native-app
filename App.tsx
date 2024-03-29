import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import OnbordingScreen from "./screens/OnbordingScreen";
import OtpScreen from "./screens/OtpScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { PaperProvider } from "react-native-paper";
import ReportScreen from "./screens/ReportScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
// import TopAppBar from "./components/TopAppBar";

type RootStackParamList = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  OtpScreen: undefined;
  DashboardScreen: undefined;
  ReportScreen: undefined;
};

const Stack = createNativeStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: "#f4d41e",
  },
  headerTitleStyle: {
    // color: "#fff",
  },
};

export default function App() {
  return (
    <>
      <ClerkProvider
        publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      >
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: "Welcome to Sahayak", ...options }}
              />
              <Stack.Screen
                name="OnboardingScreen"
                component={OnbordingScreen}
                options={{ title: "Login", ...options }}
              />
              <Stack.Screen
                name="OtpScreen"
                component={OtpScreen}
                options={{ title: "Enter OTP Here", ...options }}
              />
              <Stack.Screen
                name="DashboardScreen"
                component={DashboardScreen}
              />
              <Stack.Screen
                name="ReportScreen"
                component={ReportScreen}
                options={options}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </ClerkProvider>
    </>
  );
}

export { RootStackParamList };
