import { FlatList, Text, View } from "react-native";
import CardListProduct from "./CardListProduct";
import { DummyData } from "@/constants/DummyData";

export default function Recommendation({ ...props }) {
  return (
    <View
      style={{
        marginHorizontal: 15,
        flex: 1,
      }}
      {...props}
    >
      <Text
        style={{
          fontFamily: "PoppinsSemiBold",
          fontSize: 16,
        }}
      >
        Rekomendasi Untuk Kamu
      </Text>
      <FlatList
        data={DummyData.products}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          paddingVertical: 16,
          gap: 16,
        }}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <CardListProduct product={item} onPress={() => console.log("ok")} />
        )}
      />
    </View>
  );
}
