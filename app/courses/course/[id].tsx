import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Index() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Kurssi {id}</Text>
    </View>
  );
}
