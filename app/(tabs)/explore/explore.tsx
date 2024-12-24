import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Explore</Text>
      <Link href={"/(tabs)/explore/store/1"} style={{ color: "#000" }}>Store 1</Link>
      <Link href={"/(tabs)/explore/store/1000"} style={{ color: "#000" }}>Store 1000</Link>
    </View>
  );
}