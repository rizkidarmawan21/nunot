import Container from "@/components/Container";
import Input from "@/components/field/Input";
import Logo from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import useForm from "@/hooks/useForm";
import { Link } from "expo-router";
import {
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen() {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            marginTop: 50,
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
            gap: 16,
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
            Masuk
          </Text>

          {/* Field Input */}
          <View
            style={{
              gap: 15,
            }}
          >
            <Input
              placeholder="Masukan Email"
              value={form.email}
              onChange={(val) => setForm("email", val)}
            />
            <Input
              placeholder="Masukan Password"
              value={form.password}
              onChange={(val) => setForm("password", val)}
              secure
            />
          </View>

          <View
            style={{
              gap: 16,
            }}
          >
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
                  Masuk
                </Text>
              </TouchableOpacity>
            </Link>
            <Text
              style={{
                color: Colors.global.secondary,
                fontSize: 14,
                fontFamily: "Poppins",
              }}
            >
              Belum punya akun?{" "}
              <Link href="/signup" style={{ color: "#508EFF" }}>
                Daftar Sekarang
              </Link>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Container>
    // </TouchableWithoutFeedback>
  );
}
