import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

export default function App(){

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded)
  return <AppLoading />

  return (
    <Routes />
  );
}