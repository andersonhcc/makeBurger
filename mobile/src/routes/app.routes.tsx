import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SceneName } from "./scene-name";

import { Dashboard } from "../screens/Dashboard";


const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    
    <Stack.Navigator>
      
      <Stack.Screen name={SceneName.Dashboard} component={Dashboard} />
    
    </Stack.Navigator>
  )
}