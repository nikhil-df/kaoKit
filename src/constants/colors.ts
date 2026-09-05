import { useColorScheme } from "react-native";

const colors = {
  light: {
    // Backgrounds
    background: "#FFFDF8",
    surface: "#FFFFFF",
    surfaceElevated: "#FFF9E8",
    card: "#FFFFFF",
    input: "#FFFDF7",

    // Brand - Warm Golden Yellow
    primary: "#FFC928",
    primaryDark: "#E5A900",
    primaryLight: "#FFE8A3",
    primarySoft: "#FFF4CF",

    // Text
    text: "#202124",
    textSecondary: "#737373",
    textMuted: "#A6A6A6",
    textOnPrimary: "#1C1C1C",

    // Borders
    border: "#E9E4D8",
    borderStrong: "#D8D1C2",
    divider: "#F0ECE3",

    // Status
    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",

    // Icons
    icon: "#252525",
    iconSecondary: "#737373",

    // Navigation
    tabBar: "#FFFFFF",
    tabActive: "#FFC928",
    tabInactive: "#8C8C8C",

    // Special UI
    favorite: "#FFC928",
    favoriteInactive: "#3A3A3A",
    chipBackground: "#F7F4EC",
    chipActive: "#FFE7A0",
    cardShadow: "rgba(40, 35, 20, 0.08)",
  },

  dark: {
    // Backgrounds
    background: "#0B0D10",
    surface: "#111419",
    surfaceElevated: "#171B21",
    card: "#161A20",
    input: "#15191F",

    // Brand - Golden Yellow
    primary: "#FFD23F",
    primaryDark: "#D9A900",
    primaryLight: "#FFE78A",
    primarySoft: "#2B2410",

    // Text
    text: "#F5F5F2",
    textSecondary: "#B5B7BC",
    textMuted: "#727780",
    textOnPrimary: "#141414",

    // Borders
    border: "#292E36",
    borderStrong: "#3A404A",
    divider: "#20242B",

    // Status
    success: "#22C55E",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",

    // Icons
    icon: "#F5F5F2",
    iconSecondary: "#A6AAB2",

    // Navigation
    tabBar: "#111419",
    tabActive: "#FFD23F",
    tabInactive: "#8A8F98",

    // Special UI
    favorite: "#FFD23F",
    favoriteInactive: "#F0F0F0",
    chipBackground: "#1A1F26",
    chipActive: "#3A2E0B",
    cardShadow: "rgba(0, 0, 0, 0.35)",
  },
};

export function useColors() {
  const scheme = useColorScheme();

  return scheme === "dark" ? colors.dark : colors.light;
}

export default colors;