import { useEffect, useState, useRef } from "react";
import { View } from "react-native";
import Frame from "./frame";
import Animated, {
  useAnimatedRef,
  scrollTo,
  useSharedValue,
  useDerivedValue,
} from "react-native-reanimated";
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
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const frameContainerRef = useRef<View>(null);
  const frameRefs = useRef<Record<number, View>>({});
  const scrollY = useSharedValue(0);

  const [containerHeight, setContainerHeight] = useState(0);
  const [touchBottom, setTouchBottom] = useState(false);

  const handleScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 5; // 5px for small buffer

    if (isAtBottom) {
      setTouchBottom(true);
    }
  };

  useEffect(() => {
    frameRefs.current[progress - 1].measure((x, y) => {
      setTouchBottom(false);
      scrollY.value = y;
    });
  }, [progress]);

  useDerivedValue(() => {
    scrollTo(scrollViewRef, 0, scrollY.value, true);
  });

  const FrameControls = () => (
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
  );

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
        onScroll={handleScroll}
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
        <FrameControls />
      </Animated.ScrollView>
      {touchBottom && <FrameControls />}
    </View>
  );
}
