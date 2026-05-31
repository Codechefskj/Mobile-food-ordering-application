import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        }}
        style={styles.image}
      />

      <Text style={styles.name}>Sambhav Jha</Text>

      <Text style={styles.text}>
        React Native Developer 🚀
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

  image: {
    width: 150,
    height: 150,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
  },

  text: {
    fontSize: 18,
    marginTop: 10,
  },
});