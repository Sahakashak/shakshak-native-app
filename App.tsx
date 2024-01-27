import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import OnbordingScreen from "./screens/OnbordingScreen";
import OtpScreen from "./screens/OtpScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { PaperProvider } from "react-native-paper";
import ReportScreen from "./screens/ReportScreen";

type RootStackParamList = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  OtpScreen: undefined;
  DashboardScreen: undefined;
  ReportScreen: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ReportScreen"
          screenOptions={{ headerBackVisible: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="OnboardingScreen" component={OnbordingScreen} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="ReportScreen" component={ReportScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export { RootStackParamList };
