import { Redirect } from "expo-router";

export default function Index() {
  const isUserLogin = true;

  if (isUserLogin) {
    return <Redirect href="/(tabs)/profile" />;
  }

  return <Redirect href="/(auth)/login" />;
}
