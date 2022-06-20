import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/navigators/MainStack";
import { SafeAreaView, StatusBar } from "react-native";
import LoaderProvider from "./src/contexts/LoaderContext";

export default function App() {
  return (
   
    <SafeAreaView style={{flex: 1}} >      
        <LoaderProvider>
        <StatusBar />
          <NavigationContainer>
              <MainStack /> 
          </NavigationContainer> 
         </LoaderProvider>   
    </SafeAreaView>
  );
}