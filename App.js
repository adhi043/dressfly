import * as React from "react";
import { View, Text, Pressable, TouchableOpacity, StatusBar, LogBox } from "react-native";
import StackNavigator from "./src/Navigation/StackNavigator";
import { Color } from "./src/GlobalStyles";


const App = () => {

  LogBox.ignoreAllLogs();

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
