import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Button from "@/app/components/button";
import Feedback from "../components/feedback";

export default function CourseContent({ content }: { content: any }) {
  const [containerHeight, setContainerHeight] = useState(500);

  const frames = [
    { name: 1, bg: "lightgreen", height: 200 },
    { name: 2, bg: "lightcoral", height: 300 },
    { name: 3, bg: "pink", height: 400 },
    { name: 4, bg: "lightorange", height: 200 },
    { name: 5, bg: "beige", height: 300 },
  ];

  return (
    <View
      style={{ flex: 1 }}
      onLayout={(e) => {
        const { height } = e.nativeEvent.layout;
        setContainerHeight(height);
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "lightblue",
        }}
      >
        {/* Frames */}
        {frames.map((frame, index) => (
          <View
            key={index}
            style={{
              height:
                index === frames.length - 1 ? containerHeight : frame.height,
              backgroundColor: frame.bg,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24 }}>{`Frame ${frame.name}`}</Text>
            </View>

            {index === frames.length - 1 && (
              <View style={{ padding: 30 }}>
                <Button title="Jatka" onPress={() => {}} />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <Feedback answer={null} xp={10} />
    </View>
  );
}
