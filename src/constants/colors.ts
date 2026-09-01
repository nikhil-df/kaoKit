import { useColorScheme } from "react-native";

const colors = {
  light: {
    background: "#F8F8F6",
    surface: "#FFFFFF",
    card: "#F1F1EE",

    primary: "#FFD600",
    primaryDark: "#E6C200",
    primaryLight: "#FFE766",

    text: "#111111",
    textSecondary: "#666666",
    textMuted: "#999999",
    textOnPrimary: "#000000",

    border: "#E0E0DC",
    divider: "#EEEEEA",

    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",

    icon: "#111111",
    iconSecondary: "#777777",

    tabBar: "#FFFFFF",
    tabActive: "#FFD600",
    tabInactive: "#888888",
  },

  dark: {
    background: "#000000",
    surface: "#111111",
    card: "#1A1A1A",

    primary: "#FFD600",
    primaryDark: "#E6C200",
    primaryLight: "#FFE766",

    text: "#FFFFFF",
    textSecondary: "#B3B3B3",
    textMuted: "#707070",
    textOnPrimary: "#000000",

    border: "#292929",
    divider: "#222222",

    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",

    icon: "#FFFFFF",
    iconSecondary: "#999999",

    tabBar: "#0A0A0A",
    tabActive: "#FFD600",
    tabInactive: "#666666",
  },
};

export function useColors() {
  const scheme = useColorScheme();

  return scheme === "dark" ? colors.dark : colors.light;
}

export default colors;
