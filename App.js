import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar } from "react-native";
import StackNavigator from "./src/Navigation/StackNavigator";
import { Color } from "./src/GlobalStyles";

const App = () => {

  return (
    <>
    <StatusBar
        barStyle={'light-content'}
        backgroundColor={Color.background} 
      />
      <StackNavigator />
    </>
  );
};
export default App;
