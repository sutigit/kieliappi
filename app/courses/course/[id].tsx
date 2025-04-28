import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseHeader from "@/app/courses/components/course-header";
import Feedback from "../components/feedback";
import CourseContent from "../components/course-content";

export default function Course() {
  const { id } = useLocalSearchParams();
  const [answer, setAnswer] = useState<"correct" | "wrong" | null>(null);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <CourseHeader progress={20} />

      <CourseContent />

      <Feedback answer={answer} xp={10} />
    </SafeAreaView>
  );
}
