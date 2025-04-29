import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import Button from "@/app/components/button";
import Feedback from "../components/feedback";
import Frame from "./frame";

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
  const [containerHeight, setContainerHeight] = useState(0);
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
        }}
      >
        {frames.map((frame, index) => (
          <Frame
            key={index}
            content={frame}
            isLast={index === frames.length - 1}
            progress={progress}
            setProgress={setProgress}
            containerHeight={containerHeight}
          />
        ))}
      </ScrollView>
    </View>
  );
}
