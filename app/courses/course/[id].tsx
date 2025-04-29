import { StyleSheet } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseProgress from "@/app/courses/components/course-header";
import CourseContent from "../components/course-content";

import content from "@/app/courses/blueprints/pilkku.json";

export default function Course() {
  const { id } = useLocalSearchParams();
  const [progress, setProgress] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <CourseProgress content={content} progress={progress} />
      <CourseContent
        content={content}
        progress={progress}
        setProgress={setProgress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});
