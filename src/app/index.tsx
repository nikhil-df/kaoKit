import { Redirect } from "expo-router";

export default function Index() {
  const isUserLogin : boolean = false;

  if (isUserLogin) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
