import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.avatar}
      />

      {/* User Info */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john@example.com</Text>

      {/* Profile Details */}
      <View style={styles.card}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>+91 98765 43210</Text>

        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>Lucknow, India</Text>
      </View>

      {/* Edit Button */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>

      {/* Logout Button */}
      <Pressable style={[styles.button, styles.logoutButton]}>
        <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 40,
    marginBottom: 16,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
  },

  email: {
    fontSize: 16,
    color: "#777",
    marginTop: 6,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
  },

  label: {
    fontSize: 14,
    color: "#888",
    marginTop: 8,
  },

  value: {
    fontSize: 17,
    color: "#222",
    marginTop: 4,
    marginBottom: 12,
  },

  button: {
    width: "100%",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  logoutButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff3b30",
  },

  logoutText: {
    color: "#ff3b30",
  },
});
