import { useEffect, useState, useRef } from "react";
import { findNodeHandle, ScrollView, View } from "react-native";
import Frame from "./frame";
import Animated from "react-native-reanimated";
import Button from "@/app/components/button";
import Feedback from "./feedback";

export default function CourseContent({
  content,
  progress,
  setProgress,
}: {
  content: any;
  progress: number;
  setProgress: (progress: number) => void;
}) {
  const scrollViewRef = useRef<Animated.ScrollView>(null);
  const frameContainerRef = useRef<View>(null);
  const frameRefs = useRef<Record<number, View>>({});

  const [containerHeight, setContainerHeight] = useState(0);
  // const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    frameRefs.current[progress - 1].measure((x, y) => {
      scrollViewRef.current?.scrollTo({
        y,
        animated: true,
      });
    });
  }, [progress]);

  // const handleScroll = (event: any) => {
  //   const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
  //   const isAtBottom =
  //     layoutMeasurement.height + contentOffset.y >= contentSize.height - 10; // 10 for small buffer

  //   if (isAtBottom) {
  //     setShowFooter(true);
  //   }
  // };

  return (
    <View
      style={{ flex: 1, position: "relative" }}
      onLayout={(e) => {
        const { height } = e.nativeEvent.layout;
        setContainerHeight(height);
      }}
    >
      <Animated.ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        // onScroll={(e) => handleScroll(e)}
        scrollEventThrottle={16} // ~60fps for better responsiveness
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View ref={frameContainerRef} style={{ flex: 1 }}>
          {content.frames.map((frame: any, index: number) => (
            <View
              key={index}
              ref={(el) => {
                if (el) {
                  frameRefs.current[index] = el;
                }
              }}
              style={{
                height: index < progress ? "auto" : 0,
                minHeight: index === progress - 1 ? containerHeight : "auto",
              }}
            >
              <Frame content={frame} />
            </View>
          ))}
        </View>
      </Animated.ScrollView>

      {/* {showFooter && ( */}
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: 30,
        }}
      >
        <Button title={"Jatka"} onPress={() => setProgress(progress + 1)} />
        <Feedback answer={null} xp={10} />
      </Animated.View>
      {/* )} */}
    </View>
  );
}
