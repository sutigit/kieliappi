import { View, StyleSheet } from "react-native";
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
        transform: [{ translateY: answer === null ? "100%" : "0%" }],
        ...styles.container,
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

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
});
