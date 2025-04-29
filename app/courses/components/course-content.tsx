import { useEffect, useState, useRef } from "react";
import { ScrollView, View } from "react-native";
import Frame from "./frame";

export default function CourseContent({
  content,
  progress,
  setProgress,
}: {
  content: any;
  progress: number;
  setProgress: (progress: number) => void;
}) {
  const [containerHeight, setContainerHeight] = useState(0);
  const [frames, setFrames] = useState<any[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

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
        ref={scrollViewRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        onContentSizeChange={() => {
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({
              animated: true,
            });
          }
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
