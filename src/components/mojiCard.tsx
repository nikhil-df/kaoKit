import { Text, View } from "react-native"

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
  return (
    <View>
      <Text>{data.id}</Text>
      <Text>{data.kaomoji}</Text>
      <Text>{data.category}</Text>
      <Text>{data.subcategory}</Text>
    </View>
  );
}

