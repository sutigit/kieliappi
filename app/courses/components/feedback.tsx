import { View } from "react-native";
import CorrectAnswerBanner from "./correct-answer-banner";
import WrongAnswerBanner from "./wrong-answer-banner";

export default function Feedback({
  answer,
  xp,
}: {
  answer: "correct" | "wrong" | null;
  xp: number;
}) {
  return (
    <View
      style={{
        zIndex: 10,
        transform: [{ translateY: answer === null ? "100%" : "0%" }],
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
      }}
    >
      {answer === "correct" ? (
        <CorrectAnswerBanner xp={xp} />
      ) : (
        <WrongAnswerBanner />
      )}
    </View>
  );
}
