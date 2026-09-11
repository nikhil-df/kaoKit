import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    CherryBombOne : require("../assets/fonts/CherryBombOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex : 1}}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  )

}
