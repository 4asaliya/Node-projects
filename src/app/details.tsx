import Greeting from "@/components/Greeting";
import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      
      <View style={styles.header}>
        <Image
          source={require("../assets/images/bakery.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Our Bakery Details</Text>
      <Text style={styles.subtitle}>
        Learn more about our fresh breads and delicious pastries
      </Text>

      <Greeting name="Aliia" role="Visitor" />

      <ProfileCard
        name="Aliia"
        role="Student"
        course={4}
      />

      {/* <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable> */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },
  header: {
    marginTop: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#3E2C1C",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#7A6A58",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#C58B59",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 16,
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
