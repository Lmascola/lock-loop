import { Stack } from 'expo-router';
import { useContext } from 'react';
import { AppProvider, AppContext } from '../context/AppContext';
import OnboardingScreen from '../screens/OnboardingScreen';

function RootLayoutNav() {
  const { onboarded } = useContext(AppContext);

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
