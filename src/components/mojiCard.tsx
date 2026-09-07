import { useColors } from "@/constants/colors"
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native"
import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { kaomoji } from "@/constants/types/kaomojiTypes";

type UserCardProps = {
  data: kaomoji
}


export default function UseMojiCard({ data }: UserCardProps) {
  const colors = useColors()
  const { width } = useWindowDimensions();
  const [copied, setCopied] = useState(false);

  const fontSizes = {
    small: width * 0.04,
    medium: width * 0.06,
    large: width * 0.08,
    huge: width * 0.12,
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(data.kaomoji);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <Pressable style={[{ backgroundColor: colors.card , borderColor : colors.border, shadowColor: colors.cardShadow}, styles.container]}
      onPress={handleCopy}
    >
      <View style={styles.kaomojiContainer}>
        <Text
          style={[
            { color: colors.primary, fontSize: fontSizes.large },
            styles.kaomoji,
            copied && styles.hiddenKaomoji,
          ]}
        >
          {data.kaomoji}
        </Text>

        {copied && (
          <Text
            style={[
              { color: colors.primary, fontSize: fontSizes.medium },
              styles.copiedText,
            ]}
          >
            Copied!
          </Text>
        )}
      </View>
      <View style={styles.categoryContainer}>
        <Text style={[{ color: colors.textMuted, fontSize: fontSizes.small }, styles.subcatagory]}>{data.subcategory}</Text>
        <Text style={[{ color: colors.primary }, styles.dot]}>•</Text>
        <Text style={[{ color: colors.textMuted, fontSize: fontSizes.small }, styles.catagory]}>{data.category}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
    paddingHorizontal:20,
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  kaomoji: {
    fontWeight: '900'
  },
  categoryContainer: {
    flexDirection: "row",
  },
  subcatagory: {
    alignSelf: "center"
  },
  dot: {
    fontSize: 30,
    paddingHorizontal: 5
  },
  catagory: {
    alignSelf: "center"
  },
  kaomojiContainer: {
  position: "relative",
  justifyContent: "center",

 },

hiddenKaomoji: {
  opacity: 0,
},
copiedText: {
  fontWeight: "600",
  position:"absolute"
},
})