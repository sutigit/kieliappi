import { View, Text } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";
import Image from "./image";
import Example from "./example";
import TextBlock from "./text-block";
import Title from "./title";

interface Content {
  type: string;
  image?: string;
  title?: string;
  text?: string[];
  example?: string[];
  exercise?: Exercise;
}

interface Exercise {
  id: string;
  type: string;
  options?: string[];
  starter?: string;
  answer: string;
  points: number;
  explanation: string;
  response: {
    correct: string;
    incorrect: string;
  };
}

const Exercise = ({
  exercise,
  action,
}: {
  exercise: Exercise;
  action: () => void;
}) => {
  return (
    <View style={{ marginTop: 10 }}>
      {exercise.options?.map((option, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#fff7ed",
            paddingHorizontal: 18,
            paddingVertical: 12,
            borderRadius: 10,
            marginTop: 15,
            borderWidth: 1,
            borderBottomWidth: 4,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "medium" }}>{option}</Text>
        </View>
      ))}
    </View>
  );
};

export default function Frame({
  content,
  action,
}: {
  content: Content;
  action: () => void;
}) {
  return (
    <View style={{ flex: 1 }}>
      {content.image && <Image image={content.image} />}
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 15 }}>
        {content.title && <Title text={content.title} />}
        {content.text && <TextBlock text={content.text} />}
        {content.example && <Example text={content.example} />}
        {content.exercise && (
          <Exercise exercise={content.exercise} action={action} />
        )}
      </View>
    </View>
  );
}
