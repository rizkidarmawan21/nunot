import Container from "@/components/Container";
import Logo from "@/components/svg/Logo";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function SignUpScreen() {
    return (
        <Container>
            <ImageBackground
                source={require('../assets/images/bg.png')}
                style={{
                    flex: 1,
                    paddingHorizontal: 24,
                    justifyContent: 'space-between',
                }}
            >
                <Logo
                    style={{
                        marginTop: 200,
                    }}
                />
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    minHeight: 200,
                    borderRadius: 24,
                    padding: 20,
                    flexDirection: 'column',
                    gap: 10,
                    marginBottom: 30,
                }}>
                    <Text
                        style={{
                            color: Colors.global.title,
                            fontSize: 26,
                            fontFamily: 'PoppinsBold',
                        }}
                    >
                        Daftar
                    </Text>

                    {/* Field Input */}
                    <View>

                    </View>

                    <View
                        style={{
                            gap: 16,
                        }}
                    >
                        <Link
                            replace
                            href="/signin"
                            asChild
                        >
                            <TouchableOpacity style={{
                                backgroundColor: Colors.global.main,
                                padding: 16,
                                borderRadius: 50,
                                marginTop: 16,
                                alignItems: 'center',
                            }}>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: 16,
                                        fontFamily: 'PoppinsSemiBold',
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
                                fontFamily: 'Poppins',
                            }}
                        >
                            Sudah punya akun? <Link href="/signin" style={{ color: '#138dd4' }}>Masuk Sekarang</Link>
                        </Text>
                    </View>

                </View>
            </ImageBackground>
        </Container>
    );
}