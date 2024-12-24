import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "dark" }}>Home</Text>
      <Link href={"/(tabs)/(home)/search"} style={{ color: "#000" }}>Search</Link>
    </View>
  );
}