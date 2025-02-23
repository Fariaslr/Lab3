import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Ranking() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Ranking de Jogadores</Text>
      <Button title="⬅️ Voltar" onPress={() => router.back()} color="#2196F3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
