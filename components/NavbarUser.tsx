import { Colors } from "@/constants/Colors";
import { Image, Text, View } from "react-native";
import Notification from "./Notification";

export default function NavbarUser() {
  return (
    <View
      style={{
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#F5F5F5",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: "PoppinsSemiBold",
              color: Colors.global.main,
              fontSize: 16,
            }}
          >
            Shayna Way
          </Text>
          <Text
            style={{
              fontFamily: "Poppins",
              color: Colors.global.secondary,
              fontSize: 12,
            }}
          >
            Customer
          </Text>
        </View>
      </View>

      <Notification />
    </View>
  );
}
