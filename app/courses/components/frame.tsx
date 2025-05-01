import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Button from "@/app/components/button";
import Feedback from "./feedback";

export default function Frame({
  content,
}: // isLast,
// progress,
// setProgress,
// containerHeight,
{
  content: any;
  // isLast: boolean;
  // progress: number;
  // setProgress: (progress: number) => void;
  // containerHeight: number;
}) {
  useEffect(() => {});

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

//   return (
//     <View style={{ minHeight: isLast ? containerHeight : "auto" }}>
//       <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 30 }}>
//         {content.text.map((text: string, index: number) => (
//           <Text
//             key={index}
//             style={{ fontSize: 16, lineHeight: 24, marginBottom: 20 }}
//           >
//             {text}
//           </Text>
//         ))}
//       </View>

//       {isLast && (
//         <View
//           style={{
//             padding: 30,
//             position: "relative",
//             backgroundColor: "white",
//           }}
//         >
//           <Button title={"Jatka"} onPress={() => setProgress(progress + 1)} />
//           <Feedback answer={null} xp={10} />
//         </View>
//       )}
//     </View>
//   );
// }
