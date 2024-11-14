import { Colors } from "@/constants/Colors";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FullStar from "./svg/FullStar";
import HalfStar from "./svg/HalfStar";

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  location: string;
};

type Props = {
  product: Product;
  onPress: () => void;
};

export default function CardProduct({ product, onPress }: Props) {
  const fullStar = Math.floor(product.rating); // pembulatan ke bawah
  const hasHalfStar = product.rating % 1 != 0;

  return (
    <TouchableOpacity>
      <Shadow
        distance={6}
        startColor={"#6161610F"}
        endColor={"#61616100"}
        offset={[0, 1]}
        style={{
          backgroundColor: "white",
          borderRadius: 12,
        }}
      >
        <View
          style={{
            width: 250,
            height: 210,
            backgroundColor: "#fff",
            borderRadius: 12,
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{
              width: 250,
              height: 150,
              objectFit: "cover",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />

          <View
            style={{
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "PoppinsSemiBold",
                  fontSize: 14,
                  color: Colors.global.title,
                }}
              >
                {product.title}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 12,
                  color: Colors.global.secondary,
                }}
              >
                {product.location}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 2,
              }}
            >
              {Array.from({ length: fullStar }, (_, i) => (
                <FullStar key={i} width={10} height={10} />
              ))}
              {hasHalfStar && <HalfStar width={10} height={10} />}
            </View>
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
}
