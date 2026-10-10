import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
export const Home = () => {
    const [valorDaApi, setValorDaApi] = useState([])
    const [match, setMatch] = useState([])

    const chamaApi = async () => {
       await axios.get("http://localhost:3000/dogs/getAllDogs").then((resp) => {
        setValorDaApi(resp.data)
       })
    }

    useEffect(() => {
        chamaApi()
    }, [])

    const apertaNoNao = () => {
        setValorDaApi((prevState) => prevState.slice(1))
    }

    const apertaNoSim = () => {
        setMatch((prevMatch) => [...prevMatch, valorDaApi[0]])
        apertaNoNao()
    }

    return (
        <View style={estile.container}>
            <TouchableOpacity style={estile.content}>
                <Image
                    source={{ uri: valorDaApi[0]?.image[0]}}
                    style={{
                        height: '90%',
                        width: '90%'
                    }}
                />
            </TouchableOpacity>

            <View style={estile.contentButtons}>
                    <TouchableOpacity onPress={apertaNoNao} style={estile.buttonNo}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={apertaNoSim} style={estile.buttonYes}>
                        <Entypo name="heart" size={24} color="black" />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const estile = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        height: '70%',
        width: '80%',
        backgroundColor: '#FFA500',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    contentButtons: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonNo: {
        height: 70,
        width: 70,
        borderRadius: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonYes: {
        height: 70,
        width: 70,
        borderRadius: 70,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems:'center'
    }
})