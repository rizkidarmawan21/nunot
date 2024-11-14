import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  FlatList,
  Text,
  Image,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import Container from "@/components/Container";
import NavbarUser from "@/components/NavbarUser";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import CardCategory from "@/components/CardCategory";
import CardProduct from "@/components/CardProduct";

export default function HomeScreen() {
  const data = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
      label: "House",
      description: "2.300 house",
      count: 2300,
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/25/25695.png",
      label: "Apartment",
      description: "1.500 apart",
      count: 1500,
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/25/25696.png",
      label: "Villa",
      description: "800 villa",
      count: 800,
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/25/25697.png",
      label: "Cottage",
      description: "600 cottage",
      count: 600,
    },
    {
      id: 5,
      icon: "https://cdn-icons-png.flaticon.com/512/25/25698.png",
      label: "Mansion",
      description: "300 mansion",
      count: 300,
    },
  ];

  const products = [
    {
      id: 1,
      image:
        "https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2023/06/18/staycationjpg-20230618013836.jpg",
      title: "Luxurious Modern",
      description:
        "A beautiful and spacious house located in the heart of Jakarta, offering 2,300 square feet of living space with modern amenities and close proximity to city landmarks.",
      rating: 4.5,
      price: 2300,
      location: "Jakarta",
    },
    {
      id: 2,
      image:
        "https://nusadayaacademy.com/wp-content/uploads/2023/08/Kamar-Hotel.jpg",
      title: "Contemporary Apartment",
      description:
        "This well-furnished apartment in Bandung offers 1,500 square feet of comfortable living space with all essential amenities and easy access to public transport and city attractions.",
      rating: 4.0,
      price: 1500,
      location: "Bandung",
    },
    {
      id: 3,
      image:
        "https://www.melayupedia.com/foto_berita/2022/02/2022-02-16-ternyata-ini-bedanya-jumlah-bintang-di-tiap-hotel.jpg",
      title: "Exclusive Villa",
      description:
        "An exclusive villa in Bali with 800 square feet of luxury space, surrounded by beautiful beaches and natural scenery, ideal for a private and relaxing getaway.",
      rating: 4.8,
      price: 5000,
      location: "Bali",
    },
    {
      id: 4,
      image:
        "https://dexauc1l0pcnj.cloudfront.net/Content/images/blog/9-ways-to-update-your-old-hotel-while-still-keeping-the-vintage-flair.jpg",
      title: "Charming Cottage",
      description:
        "This delightful cottage in Lombok offers 600 square feet of cozy living space with vintage decor and a relaxing atmosphere, ideal for a serene countryside retreat.",
      rating: 4.2,
      price: 3000,
      location: "Lombok",
    },
    {
      id: 5,
      image:
        "https://www.oldbankhotel.co.uk/wp-content/uploads/2023/10/0005-2018-Old-Bank-Hotel-Oxford-High-Res-Room-1-Balcony_-Web-Hero.jpg",
      title: "Opulent Mansion",
      description:
        "An elegant mansion in Jakarta with 300 spacious rooms, boasting luxurious decor and exclusive amenities, perfect for a premium and comfortable living experience.",
      rating: 5,
      price: 10000,
      location: "Jakarta",
    },
  ];

  return (
    <Container>
      <NavbarUser />
      {/* Search Bar */}
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
        }}
      >
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
          data={data}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
          snapToOffsets={[...Array(data.length)].map((x, i) => i * (130 + 15))}
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
          data={products}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
          snapToOffsets={[...Array(products.length)].map(
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
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
