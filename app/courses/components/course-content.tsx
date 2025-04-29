import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Button from "@/app/components/button";
import Feedback from "../components/feedback";

interface Frame {
  name: number;
  bg: string;
  height: number;
}
interface Content {
  frames: Frame[];
}

export default function CourseContent({
  content,
  progress,
  setProgress,
}: {
  content: Content;
  progress: number;
  setProgress: (progress: number) => void;
}) {
  const [containerHeight, setContainerHeight] = useState(500);
  const [frames, setFrames] = useState<Frame[]>([]);

  useEffect(() => {
    const visibeFrames = content.frames.slice(0, progress);
    setFrames(visibeFrames);
  }, [progress]);

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
        {frames.map((frame, index) => (
          <View
            key={index}
            style={{
              height:
                index === frames.length - 1 ? containerHeight : frame.height,
            }}
          >
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  backgroundColor: frame.bg,
                  height: frame.height,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24 }}>{`Frame ${frame.name}`}</Text>
              </View>
            </View>

            {index === frames.length - 1 && (
              <View style={{ padding: 30 }}>
                <Button
                  title="Jatka"
                  onPress={() => setProgress(progress + 1)}
                />
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <Feedback answer={null} xp={10} />
    </View>
  );
}
