import React, { useCallback, useMemo } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";

import { LightTheme, DarkTheme } from './src/themes';


import { AuthProvider } from './src/context/AuthContext';


SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();


import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";


export default function App() {
  const deviceColor = useColorScheme();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_600SemiBold,
    Poppins_700Bold
  });


  const themes = useMemo(() => {
    if (!deviceColor) return LightTheme;
    return deviceColor === "dark" ? DarkTheme : LightTheme;
  }, [deviceColor]);



  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;


  return (
    <ThemeProvider theme={themes}>
      <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle='light-content'
      />

      <NavigationContainer >
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

