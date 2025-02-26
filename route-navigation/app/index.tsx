import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="🎮 Jogar" onPress={() => router.navigate("/play")} color="#4CAF50" />
      <Button title="🔄 Recomeçar" onPress={() => router.navigate("/restart")} color="#FF9800" />
      <Button title="🏆 Ranking" onPress={() => router.navigate("/ranking")} color="#2196F3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4", 
    gap: 15,
  }
});
