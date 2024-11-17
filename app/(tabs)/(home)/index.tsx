import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  FlatList,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import Container from "@/components/Container";
import NavbarUser from "@/components/NavbarUser";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import CardCategory from "@/components/CardCategory";
import CardProduct from "@/components/CardProduct";
import { DummyData } from "@/constants/DummyData";
import Recommendation from "@/components/Recommendation";

export default function HomeScreen() {
  const newProduct = DummyData.products.slice(-4);
  return (
    <Container>
      <ScrollView>
        <NavbarUser />
        {/* Search Bar */}
        <View style={styles.container}>
          <Shadow
            distance={4}
            startColor={"#6161610F"}
            endColor={"#61616100"}
            offset={[0, 1]}
            style={{
              width: "100%",
              flexDirection: "row",
              borderRadius: 25,
              backgroundColor: "white",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                fontFamily: "Poppins",
                fontSize: 16,
                color: Colors.global.title,
                backgroundColor: "white",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 25,
                flex: 1,
              }}
              placeholder="Mari Cari Disini"
              placeholderTextColor={Colors.global.grey}
            />
            <Pressable
              style={{
                width: 40,
                height: 40,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.global.main,
                borderRadius: 25,
                marginEnd: 5,
              }}
            >
              <AntDesign name="search1" size={18} color="#fff" />
            </Pressable>
          </Shadow>
        </View>

        {/* Categories Section */}
        <View
          style={{
            marginVertical: 10,
          }}
        >
          {/* 
          snapToOffsets menghitung posisi di mana item akan "snap" saat menggulir.
          Formula: i * (130 + 15) 
          130 adalah lebar item, dan 15 adalah jarak antar item.
          i adalah indeks dari item dalam daftar, dimulai dari 0.
          Dengan menggunakan i, kita dapat menghitung posisi setiap item berdasarkan urutannya.
          Misalnya, untuk item pertama (i=0), posisinya adalah 0 * (130 + 15) = 0.
          Untuk item kedua (i=1), posisinya adalah 1 * (130 + 15) = 145, dan seterusnya.
          Ini memastikan setiap item berhenti di posisi yang tepat saat pengguna menggulir.
        */}
          <FlatList
            data={DummyData.categories}
            keyExtractor={(item, index) => String(index)}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(DummyData.categories.length)].map(
              (x, i) => i * (130 + 15)
            )}
            horizontal
            snapToAlignment="start"
            scrollEventThrottle={16}
            decelerationRate="fast"
            contentContainerStyle={{
              paddingHorizontal: 15,
              gap: 15,
            }}
            renderItem={({ item }) => <CardCategory category={item} />}
          />
        </View>

        {/* Products Section */}
        <View
          style={{
            marginVertical: 10,
          }}
        >
          {/* 
          snapToOffsets menghitung posisi di mana item akan "snap" saat menggulir.
          Formula: i * (230 + 15) 
          130 adalah lebar item, dan 15 adalah jarak antar item.
          i adalah indeks dari item dalam daftar, dimulai dari 0.
          Dengan menggunakan i, kita dapat menghitung posisi setiap item berdasarkan urutannya.
          Misalnya, untuk item pertama (i=0), posisinya adalah 0 * (230 + 15) = 0.
          Untuk item kedua (i=1), posisinya adalah 1 * (230 + 15) = 245, dan seterusnya.
          Ini memastikan setiap item berhenti di posisi yang tepat saat pengguna menggulir.
        */}
          <FlatList
            data={newProduct}
            keyExtractor={(item, index) => String(index)}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(newProduct.length)].map(
              (x, i) => i * (230 + 15)
            )}
            horizontal
            snapToAlignment="start"
            scrollEventThrottle={16}
            decelerationRate="fast"
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              gap: 15,
            }}
            renderItem={({ item }) => (
              <CardProduct product={item} onPress={() => {}} />
            )}
          />
        </View>

        {/* Recommendation */}
        <Recommendation />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
});
