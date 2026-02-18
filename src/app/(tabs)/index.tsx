import CounterButton from "@/components/CounterButton";
import Greeting from "@/components/Greeting";
import ProfileCard from "@/components/ProfileCard";
import { useRouter } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../../assets/images/background.jpg")}
        style={styles.header}
        resizeMode="cover"
        imageStyle={{ borderBottomLeftRadius: 28, borderBottomRightRadius: 28 }}>
      </ImageBackground>

      <View style={styles.logoWrapper}>
        <Image
          source={require("../../assets/images/bakery.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Fresh bakery</Text>
        <Text style={styles.subtitle}>
          Warm bread, sweet pastries, made with love every day
        </Text>

        <Greeting name="Aliia" role="student" />
        </View>

      <View style={styles.row}>
        <CounterButton 
            title="CLickkkkk"
            initialValue={2}
            step={5}
        />
        <ProfileCard
          name="Aliia"
          role="Student"
          course={4}
        />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },

  logoWrapper: {
    alignItems: "center",
    marginTop: -60,
  },

  header:{
    width:"100%",
    height: 260,
    justifyContent:"flex-end",
    paddingBottom:20,
  },

  logo: {
    width: 120,
    height: 120,
    backgroundColor: "#FFF",
    borderRadius: 60,
    padding: 20,
    resizeMode: "contain",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#3E2C1C",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#7A6A58",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },

  footer: {
    padding: 24,
  },

  row: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  },
});
