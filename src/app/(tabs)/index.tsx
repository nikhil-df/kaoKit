import { useColors } from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const colors = useColors()
  return (
    <View>
      <Text style={styles.title}>Welcome 👋</Text>

      <Text style={styles.subtitle}>
        This is your home screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
