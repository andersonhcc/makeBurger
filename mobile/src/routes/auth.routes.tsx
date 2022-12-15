import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";

import { SceneName } from "./scene-name";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    
    <Stack.Navigator>
      
      <Stack.Screen name={SceneName.SignIn} component={SignIn} options={{headerShown: false}}/>
    
    </Stack.Navigator>
  )
}