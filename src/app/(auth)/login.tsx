import { useColors } from "@/constants/colors";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
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
            Welcome back
          </Text>

          <Text
            style={[
              styles.subtitle,
              { color: colors.textSecondary },
            ]}
          >
            Login to continue to your account
          </Text>

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
            placeholder="Enter your password"
            placeholderTextColor={colors.textMuted}
            secureTextEntry
          />

          {/* Forgot password */}
          <Pressable style={styles.forgotButton}>
            <Text
              style={[
                styles.forgotText,
                { color: colors.primary },
              ]}
            >
              Forgot password?
            </Text>
          </Pressable>

          {/* Login button */}
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
              Login
            </Text>
          </Pressable>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View
              style={[
                styles.divider,
                { backgroundColor: colors.divider },
              ]}
            />

            <Text
              style={[
                styles.dividerText,
                { color: colors.textMuted },
              ]}
            >
              OR
            </Text>

            <View
              style={[
                styles.divider,
                { backgroundColor: colors.divider },
              ]}
            />
          </View>

          {/* Signup */}
          <View style={styles.bottomText}>
            <Text
              style={[
                styles.normalText,
                { color: colors.textSecondary },
              ]}
            >
              Don't have an account?{" "}
            </Text>

            <Pressable onPress={() => router.push("/signup")}>
              <Text
                style={[
                  styles.linkText,
                  { color: colors.primary },
                ]}
              >
                Sign Up
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
    marginBottom: 28,
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
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },

  forgotText: {
    fontSize: 14,
    fontWeight: "600",
  },

  button: {
    height: 56,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "800",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
  },

  divider: {
    flex: 1,
    height: 1,
  },

  dividerText: {
    marginHorizontal: 14,
    fontSize: 12,
    fontWeight: "600",
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
