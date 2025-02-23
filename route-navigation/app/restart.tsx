import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Restart() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔄 Recomeçar Jogo</Text>
      <Button title="⬅️ Voltar" onPress={() => router.back()} color="#FF9800" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF3E0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
