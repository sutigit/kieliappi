import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CourseHeader from "@/app/components/course-header";

export default function Course() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <CourseHeader progress={20} />
    </SafeAreaView>
  );
}
