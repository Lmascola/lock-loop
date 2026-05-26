import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import FocusScreen from "./screens/FocusScreen";
import StatsScreen from "./screens/StatsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#050505",
            borderTopColor: "#111"
          },
          tabBarActiveTintColor: "#4DA6FF",
          tabBarInactiveTintColor: "#777"
        }}
      >
        <Tab.Screen name="Control" component={HomeScreen} />
        <Tab.Screen name="Focus" component={FocusScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
