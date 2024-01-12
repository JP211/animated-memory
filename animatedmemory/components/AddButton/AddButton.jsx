import { TouchableOpacity, Text, Touchable } from "react-native";
import { s } from "./AddButton.style";

export function AddButton({}) {
    return (
        <TouchableOpacity style={s.btn}>
            <Text style={s.txt}>Add New</Text>
        </TouchableOpacity>
    )
}
