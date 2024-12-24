import { Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function StoreScreen() {

  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#000" }}>Store: {id}</Text>
    </View>
  );
}