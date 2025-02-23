import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Medium() {
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: "#FFF9C4" }]}>
      <Text style={styles.title}>⚡ Modo Intermediário</Text>
      <Button title="⬅️ Voltar" onPress={() => router.back()} color="#FFC107" />
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
