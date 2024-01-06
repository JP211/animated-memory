import { s } from "./Header.style";
import { Text, View } from "react-native";

export function Header() {
    return (
        <>
        <View style={s.container}>
            <Text style={s.title}>
                Challenges
            </Text>
            </View>
        </>
    )
}