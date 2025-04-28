import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link style={{ fontSize: 20, color: "blue" }} href="/courses">
        Kurssit
      </Link>
    </SafeAreaView>
  );
}
