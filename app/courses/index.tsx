import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Courses() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href={{
          pathname: "/courses/course/[id]",
          params: { id: "123" },
        }}
        style={{ fontSize: 20, color: "blue" }}
      >
        Pilkku
      </Link>
    </SafeAreaView>
  );
}
