import axios from 'axios';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function App () {
    const [value, setValue] = useState("")

    const requestApi = async () => {
        await axios.get("http://localhost:3000/teste").then((resp) => {
            setValue(resp.data)
        })
    }

    useEffect(() => {
        requestApi()
    }, [])

    return (
        <View>
            <Text>{value}</Text>
        </View>
    )
}