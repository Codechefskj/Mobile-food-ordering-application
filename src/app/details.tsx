import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Burger Details 🍔
      </Text>

      <Text style={styles.desc}>
        Fresh burger with cheese, fries and cold drink.
      </Text>

      <Button
        title="Add To Cart"
        onPress={() => router.push("/cart")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  desc: {
    fontSize: 18,
    marginVertical: 20,
  },
});