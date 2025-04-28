import { ScrollView, View, Text } from "react-native";
import Button from "@/app/components/button";

export default function CourseContent() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <View
        style={{ height: 180, width: "100%", backgroundColor: "lightgray" }}
      ></View>

      <View
        style={{
          flex: 1,
          padding: 30,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Kurssin sisältö
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            marginBottom: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View style={{ padding: 30 }}>
        <Button title="Jatka" onPress={() => {}} />
      </View>
    </ScrollView>
  );
}
