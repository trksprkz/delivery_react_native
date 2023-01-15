import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (

    <NavigationContainer>
    <View>
      <Text className="text-red-400 align-middle">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>

  );
}
