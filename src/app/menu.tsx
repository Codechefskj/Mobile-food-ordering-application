import { View, Text, Image, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Special 🍕</Text>

      <Image
        source={require("../../assets/burger.jpg")}
        style={styles.image}
      />

      <Button
        title="View Details"
        onPress={() => router.push("/details" as any)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 250,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
});