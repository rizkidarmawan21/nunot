import { Colors } from "@/constants/Colors";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FullStar from "./svg/FullStar";
import HalfStar from "./svg/HalfStar";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

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
export default function CardListProduct({ product, onPress }: Props) {
  const width = Dimensions.get("window").width - 30;
  const fullStar = Math.floor(product.rating); // pembulatan ke bawah
  const hasHalfStar = product.rating % 1 != 0;
  return (
    <Link href="/products/show" asChild>
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
              width: width,
              padding: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Image
                source={{
                  uri: product.image,
                }}
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 5,
                }}
              />
              <View
                style={{
                  flex: 1,
                  maxWidth: width - 123,
                  gap: 3,
                }}
              >
                <Text
                  style={{
                    fontFamily: "PoppinsSemiBold",
                    fontSize: 14,
                    color: Colors.global.title,
                    flexShrink: 1,
                    flexWrap: "wrap",
                  }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {product.title}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins",
                    fontSize: 12,
                    color: "#AFAFAF",
                  }}
                >
                  {product.location}
                </Text>
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
            <Feather
              name="chevron-right"
              size={30}
              color={Colors.global.title}
            />
          </View>
        </Shadow>
      </TouchableOpacity>
    </Link>
  );
}
