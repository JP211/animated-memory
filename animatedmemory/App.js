import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { s } from "./App.style";

import { Header } from "./components/Header/Header";
import { BottomMenu } from "./components/BottomMenu/BottomMenu";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.header}>
        <Header />
        </View>
      
        <View style={s.body}>
          <Text>Time to get to work.</Text>
        </View>
        <View style={s.bottom}>
        <BottomMenu />
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
