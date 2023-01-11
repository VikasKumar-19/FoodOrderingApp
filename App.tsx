import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchAddressScreen from "./src/screens/SearchAddressScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { RootStackParamList } from "./src/utils/types";
import { Provider } from "react-redux";
import { store } from "./src/redux-app/store";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<RootStackParamList>();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="Food" screenOptions={{}}>
      <Tab.Screen
        name="Food"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={28} />
          ),
          title: "home",
        }}
      />
      <Tab.Screen
        name="Offer"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const LandingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      {/* <Stack.Screen
        name="Search Address Screen"
        component={SearchAddressScreen}
      /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LandingStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
