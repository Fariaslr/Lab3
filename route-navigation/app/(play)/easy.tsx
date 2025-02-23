import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Easy() {
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: "#E8F5E9" }]}>
      <Text style={styles.title}>Modo Fácil 🎯</Text>
      <Button title="⬅️ Voltar" onPress={() => router.back()} color="#4CAF50" />
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
