import FullStar from "@/components/svg/FullStar";
import HalfStar from "@/components/svg/HalfStar";
import { Colors } from "@/constants/Colors";
import { Image, Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function DetailProduct() {
  const fullStar = 4;
  const hasHalfStar = true;
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: -insets.top,
      }}
    >
      <Image
        source={{
          uri: "https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2023/06/18/staycationjpg-20230618013836.jpg",
        }}
        style={{
          width: "100%",
          height: 296,
          objectFit: "cover",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          width: "100%",
          marginTop: -40,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          paddingHorizontal: 30,
          paddingTop: 15,
          gap: 15,
        }}
      >
        {/* Titile */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "PoppinsSemiBold",
                color: Colors.global.title,
              }}
            >
              Modern House
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Poppins",
                color: "#AFAFAF",
              }}
            >
              KBP Bandung, Indonesia
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 2,
            }}
          >
            {Array.from({ length: fullStar }, (_, i) => (
              <FullStar key={i} width={13} height={13} />
            ))}
            {hasHalfStar && <HalfStar width={13} height={13} />}
          </View>
        </View>

        {/* Owner Info */}
        <View
          style={{
            gap: 5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "PoppinsSemiBold",
              color: Colors.global.title,
            }}
          >
            Hubungi Pemilik
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/images/profile.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Poppins",
                    color: Colors.global.title,
                  }}
                >
                  Hendra Suwastyr
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Poppins",
                    color: "#AFAFAF",
                  }}
                >
                  Owner
                </Text>
              </View>
            </View>
            <Pressable
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                backgroundColor: `${Colors.global.mainSecondary}`,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "relative",
                }}
              >
                <FontAwesome
                  name="phone"
                  size={18}
                  color={Colors.global.main}
                />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
