import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { StartApp } from "../screens/StartApp";

import { SceneName } from "./scene-name";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    
    <Stack.Navigator initialRouteName={SceneName.StartApp}>
      
      <Stack.Screen name={SceneName.SignIn} component={SignIn} options={{headerShown: false}}/>

      <Stack.Screen name={SceneName.StartApp} component={StartApp} options={{headerShown: false}}/>

    
    </Stack.Navigator>
  )
}