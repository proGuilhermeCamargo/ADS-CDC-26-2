import { decrement, increment, incrementByAmount } from "@/src/store/slices/counter"
import { RootState } from "@/src/store/store"
import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

export const Home = () => {
    const counter = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View>
            <Button
                title="+"
                onPress={() => dispatch(increment())}
            />
            <Text>{counter}</Text>
            <Button
                title="-"
                onPress={() => dispatch(decrement())}
            />
            <Button
                title="Soma mais 30"
                onPress={() => dispatch(incrementByAmount(10))}
            />
        </View>
    )
}