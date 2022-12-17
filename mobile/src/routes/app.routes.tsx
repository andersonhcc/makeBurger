import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SceneName } from "./scene-name";
import { useTheme } from "styled-components";

import { Dashboard } from "../screens/Dashboard";
import { OrderDetails } from "../screens/OrderDetails";


const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();
  
  return (
    
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name={SceneName.Dashboard} component={Dashboard} />

      <Stack.Screen name={SceneName.OrderDetails} component={OrderDetails} />

    
    </Stack.Navigator>
  )
}