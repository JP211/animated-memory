import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ScrollView } from "react-native";
import { s } from "./App.style";

import { Header } from "./components/Header/Header";
import { BottomMenu } from "./components/BottomMenu/BottomMenu";
import { Card } from "./components/Card/Card";
import { AddButton } from "./components/AddButton/AddButton";

export default function App() {
  function renderChallenges() {
    return (
      <View>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.header}>
          <Header />
        </View>

        <View style={s.body}>
          <Text>Time to get to work.</Text>

          <ScrollView>{renderChallenges()}</ScrollView>
        </View>

        <View style={s.bottom}>
          <BottomMenu />
          <AddButton />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
