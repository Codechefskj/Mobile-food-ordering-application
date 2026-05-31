import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: "https://picsum.photos/id/1080/800/400",
    title: "Burger Offer 🍔",
  },
  {
    id: "2",
    image: "https://picsum.photos/id/292/800/400",
    title: "Pizza Deal 🍕",
  },
  {
    id: "3",
    image: "https://picsum.photos/id/431/800/400",
    title: "Cold Drinks 🥤",
  },
];

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % slides.length;

      scrollRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Ace Food Service 🍔
      </Text>

      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(index);
        }}
      >
        {slides.map((item) => (
          <View key={item.id}>
            <Image
              source={{ uri: item.image }}
              style={styles.banner}
            />

            <Text style={styles.title}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dots}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      <Text style={styles.subtitle}>
        Swipe or wait for auto scroll
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  banner: {
    width,
    height: 220,
  },

  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: "#ff6b00",
  },

  subtitle: {
    textAlign: "center",
    marginTop: 20,
  },
});