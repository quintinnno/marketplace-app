import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Account</Text>
      <Link href={"/(tabs)/account/account-edit"}>Editar</Link>
    </View>
  );
}