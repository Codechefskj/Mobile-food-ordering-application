import { View, Text, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Your Cart 🛒
      </Text>

      <Text style={styles.total}>
        Total: ₹199
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  total: {
    fontSize: 22,
    marginTop: 20,
    color: "green",
  },
});