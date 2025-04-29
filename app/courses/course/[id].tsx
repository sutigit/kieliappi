import { StyleSheet } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseHeader from "@/app/courses/components/course-header";
import Feedback from "../components/feedback";
import CourseContent from "../components/course-content";

import content from "@/app/courses/blueprints/pilkku.json";

export default function Course() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <CourseHeader progress={20} />
      <CourseContent content={content} />
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
