import { View, Text } from "react-native";

export default function Frame({ content }: { content: any }) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 30 }}>
      {content.text.map((text: string, index: number) => (
        <Text
          key={index}
          style={{ fontSize: 16, lineHeight: 24, marginBottom: 20 }}
        >
          {text}
        </Text>
      ))}
    </View>
  );
}
