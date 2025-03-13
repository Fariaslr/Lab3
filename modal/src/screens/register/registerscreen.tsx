import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View, Button } from "react-native";
import * as Crypto from 'expo-crypto';

type RegisterScreenProps = {
  visible: boolean;
  onClose: () => void;
};

export function RegisterScreen({ visible, onClose }: RegisterScreenProps) {
  const [email, setEmail] = useState("");
  const [uuid, setUuid] = useState<string | null>(null);

  // Função para gerar o UUID
  const generateUUID = () => {
    if (email) {
      setUuid(Crypto.randomUUID());
    } else {
      alert("Por favor, insira um e-mail válido.");
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Registro de Usuário</Text>

          {/* Campo para inserir o e-mail */}
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Informe o seu e-mail"
            style={styles.input}
            keyboardType="email-address"
          />

          {/* Exibindo o e-mail preenchido */}
          {email && (
            <View style={styles.infoContainer}>
              <Text style={styles.label}>E-mail:</Text>
              <Text style={styles.info}>{email}</Text>
            </View>
          )}

          {/* Exibindo o UUID gerado */}
          {uuid && (
            <View style={styles.infoContainer}>
              <Text style={styles.label}>UUID Gerado:</Text>
              <Text style={styles.info}>{uuid}</Text>
            </View>
          )}

          {/* Botões */}
          <View style={styles.buttons}>
            <Button title="Gerar UUID" onPress={generateUUID} />
            <Button title="Fechar" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  info: {
    color: "blue",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
  },
});
