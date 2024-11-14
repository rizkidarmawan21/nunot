import { Colors } from "@/constants/Colors";
import { Pressable, Text, View } from "react-native";

type Props = {
  selected: boolean;
  onSelect: (val: boolean) => void;
  label?: string;
};

export default function Radio({ selected, onSelect, label }: Props) {
  //   const [selected, setSelected] = useState(value);
  return (
    <Pressable
      onPress={() => {
        onSelect(!selected);
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <View
        style={{
          width: 15,
          height: 15,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: Colors.global.grey,
          backgroundColor: selected ? "#508EFF" : "#fff",
        }}
      ></View>
      <Text
        style={{
          fontFamily: "PoppinsMedium",
          color: Colors.global.grey,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
