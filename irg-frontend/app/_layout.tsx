import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Playfair: require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    Inter: require('../assets/fonts/Inter-Regular.ttf'),
  });

  useEffect(() => {
    if (!fontsLoaded) SplashScreen.preventAutoHideAsync();
    else SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar
        backgroundColor={"#212121"}
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#212121' }}>
        <Slot />
      </SafeAreaView>
    </>
  );
}