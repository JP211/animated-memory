import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <View>
          <Text>Time to get to work.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
