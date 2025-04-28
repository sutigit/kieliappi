import { Pressable, Text } from "react-native";

export default function Button({
  title,
  onPress,
  disabled = false,
  color = "black",
  borderColor = "black",
  backgroundColor = "white",
}: {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "lightgray" : backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
          borderBottomWidth: 4,
          padding: 10,
          borderRadius: 100,
          paddingHorizontal: 30,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <Text
        style={{
          color: color,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
