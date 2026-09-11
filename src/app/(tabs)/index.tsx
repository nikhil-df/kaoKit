import { useColors } from "@/constants/colors";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "@/assets/data/kaomojis_with_ids.json";
import UseMojiCard from "@/components/mojiCard";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomeScreen() {
  const colors = useColors()
  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={[{ color: colors.primary }, styles.title]}>Kao</Text>
        <Text style={[{ color: colors.text }, styles.title]}>Kit</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={[{ color: colors.textSecondary }]}>Text emotions, made fun! </Text>
        <Ionicons name="sparkles-outline" size={14} color= {colors.primary} />
      </View>
      <FlatList
        data={data.kamomojis}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UseMojiCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  title: {
    fontSize: 50,
    fontFamily: "CherryBombOne"
  },

  subtitle: {
    fontSize: 16,
  },

  titleContainer: {
    flexDirection: "row"
  },

  subtitleContainer: {
    flexDirection: "row"
  }
});
