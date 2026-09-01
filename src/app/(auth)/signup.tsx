import { useColors } from "@/constants/colors";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SignupScreen() {
  const colors = useColors();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>

          {/* Logo */}
          <View
            style={[
              styles.logo,
              { backgroundColor: colors.primary },
            ]}
          >
            <Text
              style={[
                styles.logoText,
                { color: colors.textOnPrimary },
              ]}
            >
              Y
            </Text>
          </View>

          {/* Header */}
          <Text style={[styles.title, { color: colors.text }]}>
            Create account
          </Text>

          <Text
            style={[
              styles.subtitle,
              { color: colors.textSecondary },
            ]}
          >
            Create your account and get started
          </Text>

          {/* Name */}
          <Text style={[styles.label, { color: colors.text }]}>
            Full name
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Enter your full name"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="words"
          />

          {/* Email */}
          <Text style={[styles.label, { color: colors.text }]}>
            Email
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Enter your email"
            placeholderTextColor={colors.textMuted}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Password */}
          <Text style={[styles.label, { color: colors.text }]}>
            Password
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Create a password"
            placeholderTextColor={colors.textMuted}
            secureTextEntry
          />

          {/* Confirm password */}
          <Text style={[styles.label, { color: colors.text }]}>
            Confirm password
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Confirm your password"
            placeholderTextColor={colors.textMuted}
            secureTextEntry
          />

          {/* Signup button */}
          <Pressable
            style={[
              styles.button,
              { backgroundColor: colors.primary },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                { color: colors.textOnPrimary },
              ]}
            >
              Create Account
            </Text>
          </Pressable>

          {/* Login */}
          <View style={styles.bottomText}>
            <Text
              style={[
                styles.normalText,
                { color: colors.textSecondary },
              ]}
            >
              Already have an account?{" "}
            </Text>

            <Pressable onPress={() => router.push("/login")}>
              <Text
                style={[
                  styles.linkText,
                  { color: colors.primary },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  keyboardView: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  logoText: {
    fontSize: 30,
    fontWeight: "900",
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 26,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 15,
  },

  button: {
    height: 56,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 24,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "800",
  },

  bottomText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  normalText: {
    fontSize: 14,
  },

  linkText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
