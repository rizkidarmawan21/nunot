import Container from "@/components/Container";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Logo from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { useEffect } from "react";

export default function WelcomingScreen() {
  // on mounter redirect to home
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(tabs)/(home)");
    }, 500);
  }, []);
  return (
    <Container>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={{
          flex: 1,
          paddingHorizontal: 24,
          justifyContent: "space-between",
        }}
      >
        <Logo
          style={{
            marginTop: 200,
          }}
        />
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            minHeight: 200,
            borderRadius: 24,
            padding: 20,
            flexDirection: "column",
            gap: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: Colors.global.title,
              fontSize: 26,
              fontFamily: "PoppinsBold",
            }}
          >
            Selamat Datang
          </Text>
          <Text
            style={{
              color: Colors.global.secondary,
              fontSize: 16,
              fontFamily: "Poppins",
            }}
          >
            We have a lot of house that you {`\n`}
            use not only for staying but growing.
          </Text>
          {/* Button */}
          <Link replace href="/signin" asChild>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.global.main,
                padding: 16,
                borderRadius: 50,
                marginTop: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontFamily: "PoppinsSemiBold",
                }}
              >
                Let's Explore
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </Container>
  );
}
