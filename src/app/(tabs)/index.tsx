import { useColors } from "@/constants/colors";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "@/assets/data/kaomojis_with_ids.json";
import UseMojiCard from "@/components/mojiCard";


export default function HomeScreen() {
  const colors = useColors()
  return (
    <View style ={[{backgroundColor: colors.background},styles.container]}>
      <Text style={styles.title}>Welcome 👋</Text>
      <FlatList
          data={data.kamomojis}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <UseMojiCard data={item}/>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
