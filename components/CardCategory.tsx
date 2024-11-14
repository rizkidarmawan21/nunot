import { Colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";

type Category = {
  id: number;
  icon: string;
  label: string;
  description: string;
};

type Props = {
  category: Category;
  onPress?: () => void;
};

export default function CardCategory({ category, onPress }: Props) {
  return (
    <View
      key={category.id}
      style={{
        backgroundColor: Colors.global.mainSecondary,
        height: 160,
        width: 130,
        padding: 10,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,

          backgroundColor: Colors.global.main,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{
            width: 24,
            height: 24,
            objectFit: "contain",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "PoppinsSemiBold",
            fontSize: 16,
            color: Colors.global.main,
          }}
        >
          {category.label}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 14,
            color: Colors.global.title,
            textAlign: "center",
          }}
        >
          {category.description}
        </Text>
      </View>
    </View>
  );
}
