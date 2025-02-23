import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Hard() {
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: "#FFEBEE" }]}>
      <Text style={styles.title}>💀 Modo Difícil</Text>
      <Button title="⬅️ Voltar" onPress={() => router.back()} color="#F44336" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
