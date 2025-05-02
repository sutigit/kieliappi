import { Text } from "react-native";

const Title = ({ text }: { text: string }) => (
  <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 30 }}>
    {text}
  </Text>
);

export default Title;
