import { useColors } from "@/constants/colors";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import data from "@/assets/data/kaomojis_with_ids.json";
import UseMojiCard from "@/components/mojiCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo, useState } from "react";
import {
  categories,
  subCategories,
} from "@/assets/data/kaomoji_information";

export default function HomeScreen() {
  const colors = useColors();

  const [categoriesFilter, setCategoriesFilter] = useState("all");
  const [subCategoriesFilter, setSubCategoriesFilter] = useState("all");
  const [subCategorySearch, setSubCategorySearch] = useState("");

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

  // Search ALL subcategories
  const searchedSubCategories = useMemo(() => {
    const search = subCategorySearch.toLowerCase().trim();

    if (!search) {
      return [];
    }

    return subCategories.filter((subCategory) =>
      subCategory.toLowerCase().includes(search)
    );
  }, [subCategorySearch]);



  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {/* Header */}
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            { color: colors.primary },
          ]}
        >
          Kao
        </Text>

        <Text
          style={[
            styles.title,
            { color: colors.text },
          ]}
        >
          Kit
        </Text>
      </View>

      <View style={styles.subtitleContainer}>
        <Text style={{ color: colors.textSecondary }}>
          Text emotions, made fun!
        </Text>

        <Ionicons
          name="sparkles-outline"
          size={14}
          color={colors.primary}
        />
      </View>

      {/* Subcategory Search */}
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: colors.card },
        ]}
      >
        <Ionicons
          name="search-outline"
          size={20}
          color={colors.textSecondary}
        />

        <TextInput
          value={subCategorySearch}
          onChangeText={(text) => {
            setSubCategorySearch(text);

            // Clear selected subcategory while searching
            setSubCategoriesFilter("all");
          }}
          placeholder="Search subcategories..."
          placeholderTextColor={colors.textSecondary}
          style={[
            styles.searchInput,
            { color: colors.text },
          ]}
        />

        {subCategorySearch.length > 0 && (
          <Pressable
            onPress={() => {
              setSubCategorySearch("");
              setSubCategoriesFilter("all");
            }}
          >
            <Ionicons
              name="close-circle"
              size={20}
              color={colors.textSecondary}
            />
          </Pressable>
        )}
      </View>

      {/* Search Results */}
      {searchedSubCategories.map((subCategory) => (
        <Pressable
          key={subCategory}
          onPress={() => {
            setSubCategoriesFilter(subCategory);
            setSubCategorySearch("");
          }}
          style={[
            styles.filterButton,
            {
              backgroundColor:
                subCategoriesFilter === subCategory
                  ? colors.primary
                  : colors.card,
            },
          ]}
        >
          <Text style={{ color: colors.text }}>
            {subCategory}
          </Text>
        </Pressable>
      ))}

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >
        <Pressable
          onPress={() => {
            setCategoriesFilter("all");
          }}
          style={[
            styles.filterButton,
            {
              backgroundColor:
                categoriesFilter === "all"
                  ? colors.primary
                  : colors.card,
            },
          ]}
        >
          <Text style={{ color: colors.text }}>
            ✨ All
          </Text>
        </Pressable>

        {categories.map((category) => {
          const isSelected =
            categoriesFilter === category.value;

          return (
            <Pressable
              key={category.id}
              onPress={() => {
                setCategoriesFilter(category.value);
              }}
              style={[
                styles.filterButton,
                {
                  backgroundColor: isSelected
                    ? colors.primary
                    : colors.card,
                },
              ]}
            >
              <Text style={{ color: colors.text }}>
                {category.icon} {category.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Results */}
      <FlatList
        data={filteredMoji}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UseMojiCard data={item} />
        )}
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
  },

  // Category / filter styles
  filterContainer: {
    gap: 8,
    paddingVertical: 8,
  },

  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },

  // Subcategory search
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginVertical: 8,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    fontSize: 15,
  },
});
