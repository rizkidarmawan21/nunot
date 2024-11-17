import Container from "@/components/Container";
import Input from "@/components/field/Input";
import Radio from "@/components/field/Radio";
import Logo from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import useForm from "@/hooks/useForm";
import { Link } from "expo-router";
import {
  ImageBackground,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignUpScreen() {
  const [form, setForm] = useForm({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "customer",
  });

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
            Daftar
          </Text>

          {/* Field Input */}
          <View
            style={{
              gap: 15,
            }}
          >
            <Input
              placeholder="Masukan Nama Lengkap"
              value={form.fullName}
              onChange={(val) => setForm("fullName", val)}
            />
            <Input
              placeholder="Masukan Nomor Telepon"
              value={form.phoneNumber}
              onChange={(val) => setForm("phoneNumber", val)}
            />
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
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Radio
                label="Customer"
                selected={form.role === "customer"}
                onSelect={() => setForm("role", "customer")}
              />
              <Radio
                label="Agent"
                selected={form.role === "agent"}
                onSelect={() => setForm("role", "agent")}
              />
            </View>
          </View>

          <View
            style={{
              gap: 16,
            }}
          >
            <Link replace href="/(tabs)/(home)" asChild>
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
                  Daftar
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
              Sudah punya akun?{" "}
              <Link href="/signin" style={{ color: "#508EFF" }}>
                Masuk Sekarang
              </Link>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
}
