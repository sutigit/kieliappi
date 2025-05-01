import { View, Text } from "react-native";
import Icons from "@expo/vector-icons/Ionicons";

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

const Title = ({ text }: { text: string }) => (
  <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 30 }}>
    {text}
  </Text>
);

const TextBlock = ({ text }: { text: string[] }) => (
  <View>
    {text.map((line, index) => (
      <Text key={index} style={{ fontSize: 16, lineHeight: 24, marginTop: 20 }}>
        {line}
      </Text>
    ))}
  </View>
);

const Example = ({ text }: { text: string[] }) => (
  <View
    style={{
      backgroundColor: "#e0f2fe",
      borderColor: "#7dd3fc",
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 5,
      marginTop: 20,
      borderWidth: 1,
    }}
  >
    {text.map((line, index) => (
      <Text key={index} style={{ fontSize: 16, lineHeight: 24, margin: 10 }}>
        {line}
      </Text>
    ))}
  </View>
);

const Exercise = ({ exercise }: { exercise: Exercise }) => (
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

const Image = ({ image }: { image: string }) => (
  <View
    style={{
      backgroundColor: "#ffe4e6",
      height: 160,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Icons name="image" size={90} color="white" />
  </View>
);

export default function Frame({ content }: { content: Content }) {
  return (
    <View style={{ flex: 1 }}>
      {content.image && <Image image={content.image} />}
      <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 15 }}>
        {content.title && <Title text={content.title} />}
        {content.text && <TextBlock text={content.text} />}
        {content.example && <Example text={content.example} />}
        {content.exercise && <Exercise exercise={content.exercise} />}
      </View>
    </View>
  );
}
