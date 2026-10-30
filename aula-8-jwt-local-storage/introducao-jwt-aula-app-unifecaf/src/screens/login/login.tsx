import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import api from "@/src/api/api";
import { storeToken } from "@/src/utils/storage";
import { router } from "expo-router";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await api.post("auth/login", {
      email,
      password
    }).then(async(resp) => {
      console.log("RESPOSTA DO SERVIDOR: ", resp.data)
      await storeToken(resp.data.token)
      alert("Sucesso no login")
      router.navigate("/home-screen")
    }).catch((err) => {
      alert("Houve um erro")
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login com JWT</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};
