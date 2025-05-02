import { View, Text } from "react-native";
import type { Exercise } from "@/app/lib/types";

const SelectionEx = ({
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

export default SelectionEx;
