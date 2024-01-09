import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { s } from "./App.style";

import { Header } from "./components/Header/Header";
import { BottomMenu } from "./components/BottomMenu/BottomMenu";
import { ChallengeCard } from "./components/ChallengeCard/ChallengeCard";

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
        <ChallengeCard />
        <View style={s.bottom}>
       
        <BottomMenu />
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
