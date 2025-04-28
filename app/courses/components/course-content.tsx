import { ScrollView, View } from "react-native";
import Button from "@/app/components/button";

export default function CourseContent() {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View
        style={{ height: 180, width: "100%", backgroundColor: "lightgray" }}
      ></View>

      <View
        style={{ padding: 30, height: "100%", backgroundColor: "lightblue" }}
      >
        <View>
          <Button title="Jatka" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}
