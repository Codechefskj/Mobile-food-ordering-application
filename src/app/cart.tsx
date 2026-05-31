import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function CartScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 28 }}>
        Your Cart is Ready 🛒
      </Text>

      <Button
        title="Go To Profile"
        onPress={() => router.push("/profile" as any)}
      />
    </View>
  );
}