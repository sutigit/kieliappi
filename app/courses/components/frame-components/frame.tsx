import { View } from "react-native";

import Image from "./image";
import Example from "./example";
import TextBlock from "./text-block";
import Title from "./title";

import SelectionEx from "./exercises/selection";

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
          <SelectionEx exercise={content.exercise} action={action} />
        )}
      </View>
    </View>
  );
}
