import { View, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

export default function CourseHeader({ progress }: { progress: number }) {
  return (
    <View style={styles.container}>
      <Icons name="close" size={32} />
      <View style={styles.progressBg}>
        <View style={{ width: `${progress}%`, ...styles.progressInd }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 15,
    paddingHorizontal: 30,
    paddingBottom: 15,
    paddingTop: 30,
    backgroundColor: "#fff",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
  },
  progressBg: {
    backgroundColor: "#f0f0f0",
    height: 16,
    flex: 1,
    borderRadius: 100,
    overflow: "hidden",
  },
  progressInd: {
    backgroundColor: "#4caf50",
    height: "100%",
  },
});
