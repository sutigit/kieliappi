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

  useEffect(() => {});

  return (
    <View style={{ minHeight: isLast ? containerHeight : "auto" }}>
      <View style={{ flex: 1, padding: 20 }}>
        {content.text.map((text: string, index: number) => (
          <Text key={index} style={{ fontSize: 16, marginBottom: 10 }}>
            {text}
          </Text>
        ))}
      </View>

      {isLast && (
        <View style={{ padding: 30, position: "relative" }}>
          <Button title={"Jatka"} onPress={() => setProgress(progress + 1)} />
          <Feedback answer={answer} xp={10} />
        </View>
      )}
    </View>
  );
}
