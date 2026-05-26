import { Stack } from 'expo-router';
import { useContext } from 'react';
import { View } from 'react-native';
import { AppProvider, AppContext } from '../context/AppContext';
import OnboardingScreen from '../screens/OnboardingScreen';

function RootLayoutNav() {
  const { onboarded, loaded } = useContext(AppContext);

  if (!loaded) {
    return <View style={{ flex: 1, backgroundColor: '#050505' }} />;
  }

  if (!onboarded) {
    return <OnboardingScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AppProvider>
      <RootLayoutNav />
    </AppProvider>
  );
}
