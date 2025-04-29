import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Button from "@/app/components/button";
import Feedback from "./feedback";

export default function Frame({
  content,
  isLast,
  progress,
  setProgress,
  containerHeight,
}: {
  content: any;
  isLast: boolean;
  progress: number;
  setProgress: (progress: number) => void;
  containerHeight: number;
}) {
  const [answer, setAnswer] = useState<"correct" | "wrong" | null>(null);

  return (
    <View
      style={{
        height: isLast ? containerHeight : content.height,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: content.bg,
            height: content.height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>{`content ${content.name}`}</Text>
        </View>
      </View>

      {isLast && (
        <View style={{ padding: 30, position: "relative" }}>
          <Button title="Jatka" onPress={() => setProgress(progress + 1)} />
          <Feedback answer={answer} xp={10} />
        </View>
      )}
    </View>
  );
}
