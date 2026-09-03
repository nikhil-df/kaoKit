import { useColors } from "@/constants/colors"
import { StyleSheet, Text, useWindowDimensions, View } from "react-native"

type Kaomoji = 
    {
    id: string,
    kaomoji: string,
    subcategory: string,
    category: string
  }

type UserCardProps = {
    data : Kaomoji
}


export default function UseMojiCard({ data }: UserCardProps) {
  const colors = useColors()
  const { width } = useWindowDimensions();

  const fontSizes = {
    small: width * 0.04,
    medium: width * 0.06,
    large: width * 0.08,
    huge: width * 0.12,
  };

  return (
    <View style={[{backgroundColor : colors.card , borderBlockColor:colors.border} , styles.container]}>
      <View>
      <Text style={[{color:colors.primary , fontSize : fontSizes.large}, styles.kaomoji]}>{data.kaomoji}</Text>
      </View>
      <View style={styles.categoryContainer}>
      <Text style={[{color:colors.textMuted, fontSize : fontSizes.small}, styles.subcatagory]}>{data.subcategory}</Text>
      <Text style={[{color: colors.primary},styles.dot]}>•</Text>
      <Text style={[{color:colors.textMuted, fontSize : fontSizes.small}, styles.catagory]}>{data.category}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
      padding:10,
      margin: 10,
      paddingBottom: 0,
      borderRadius : 10,
      borderWidth: 3
  },
  kaomoji :{
    fontWeight : '900'
  },
  categoryContainer:{
    flexDirection : "row",
  },
  subcatagory:{
    alignSelf: "center"
  },
  dot:{
    fontSize: 30,
    paddingHorizontal: 5
  },
  catagory:{
    alignSelf: "center"
  },
})