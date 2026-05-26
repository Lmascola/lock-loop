import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
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
      <Tabs.Screen name="index" options={{ title: 'Control' }} />
      <Tabs.Screen name="focus" options={{ title: 'Focus' }} />
      <Tabs.Screen name="stats" options={{ title: 'Stats' }} />
    </Tabs>
  );
}
