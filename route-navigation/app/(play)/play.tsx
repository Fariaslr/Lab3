import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Play() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="🟢 Fácil" onPress={() => router.push("/easy")} color="#4CAF50" />
      <Button title="🟡 Intermediário" onPress={() => router.push("/medium")} color="#FFC107" />
      <Button title="🔴 Difícil" onPress={() => router.push("/hard")} color="#F44336" />
      <Button title="⬅️ Voltar" onPress={() => router.back()} color="#607D8B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 15,
  }
});
