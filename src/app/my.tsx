import { View, Text, StyleSheet } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это экран My</Text>
      <Text style={styles.subtitle}>
        Ты успешно перешёл на новую страницу 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});
