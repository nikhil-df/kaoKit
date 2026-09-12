import { useColors } from "@/constants/colors";
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import data from "@/assets/data/kaomojis_with_ids.json";
import UseMojiCard from "@/components/mojiCard";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from "react";
import { categories, subCategories } from "@/assets/data/kaomoji_information";


export default function HomeScreen() {
  const colors = useColors()
  const [categoriesFilter, setCategoriesFilter] = useState("all");
  const [subCategoriesFilter, setSubCategoriesFilter] = useState("all");

  const filteredMoji = useMemo(() => {
    return data.kamomojis.filter((moji) => {
      const categoryMatch =
        categoriesFilter === "all" ||
        moji.category === categoriesFilter;

      const subCategoryMatch =
        subCategoriesFilter === "all" ||
        moji.subcategory === subCategoriesFilter;

      return categoryMatch && subCategoryMatch;
    });
  }, [categoriesFilter, subCategoriesFilter]);


  return (
    <View style={[{ backgroundColor: colors.background }, styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={[{ color: colors.primary }, styles.title]}>Kao</Text>
        <Text style={[{ color: colors.text }, styles.title]}>Kit</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={[{ color: colors.textSecondary }]}>Text emotions, made fun! </Text>
        <Ionicons name="sparkles-outline" size={14} color={colors.primary} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Pressable
          onPress={() => setCategoriesFilter("all")}
        >
          <Text>All</Text>
        </Pressable>

        {categories.map((category) => (
          <Pressable
            key={category}
            onPress={() => {
              setCategoriesFilter(category);
              setSubCategoriesFilter("all");
            }}
          >
            <Text>{category}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Subcategories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Pressable
          onPress={() => setSubCategoriesFilter("all")}
        >
          <Text>All</Text>
        </Pressable>

        {subCategories.map((subCategory) => (
          <Pressable
            key={subCategory}
            onPress={() => setSubCategoriesFilter(subCategory)}
          >
            <Text>{subCategory}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <FlatList
        data={filteredMoji}
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
