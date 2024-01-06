import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { s } from "./App.style";

import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'gray' }}>
      <Header />
        <View style={s.root}>
          <Text>Time to get to work.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
