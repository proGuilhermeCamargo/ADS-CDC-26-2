import axios from 'axios';
import { useEffect, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [valorApi, setValorApi] = useState([])
  const [match, setMatch] = useState([])

  const chamaApi = async () => {
      await axios.get('http://localhost:3000/dogs/getAllDogs').then((resp) => {
        setValorApi(resp.data)
      })
  }

  useEffect(() => {
    chamaApi()
  }, [])

  const apertaNoNao = () => {
    setValorApi((prevState) => prevState.slice(1))
  }

  const apertaNoSim = () => {
    setMatch((prevMatch) => [...prevMatch, valorApi[0]])
    apertaNoNao()
  }

  return (
    <View>
      <Image
        source={{ uri: valorApi[0]?.image[0]}}
        style={{
          height: 300,
          width: 300
        }}
      />
      <TouchableOpacity
        onPress={apertaNoNao}
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red'
        }}
      />
       <TouchableOpacity
       onPress={apertaNoSim}
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'green'
        }}
      />
    </View>
  );
}