import { s } from "./BottomMenu.style";
import { Text, TouchableOpacity, View } from "react-native";

export function BottomMenu() {
  return (
    <>
      <View style={s.btnContainer}>
        <TouchableOpacity style={s.btn}>
          <Text style={s.btnText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btn}>
          <Text style={s.btnText}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btn}>
          <Text style={s.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
