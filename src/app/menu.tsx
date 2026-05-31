import { FlatList, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const CARD_SIZE = (width - 50) / 2;

const foods = [
  {
    id: "1",
    name: "Burger",
    price: "₹199",
    image: "https://picsum.photos/id/292/300/300",
  },
  {
    id: "2",
    name: "Pizza",
    price: "₹299",
    image: "https://picsum.photos/id/1080/300/300",
  },
  {
    id: "3",
    name: "Fries",
    price: "₹149",
    image: "https://picsum.photos/id/431/300/300",
  },
  {
    id: "4",
    name: "Coke",
    price: "₹99",
    image: "https://picsum.photos/id/225/300/300",
  },
];

export default function MenuScreen() {
  return (
    <FlatList
      data={foods}
      numColumns={2}
      contentContainerStyle={{ padding: 10 }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/details")}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />

          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.price}>
            {item.price}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 15,
    padding: 10,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  price: {
    color: "green",
    marginTop: 5,
  },
});