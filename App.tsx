import { SafeAreaView, StatusBar } from 'react-native';
import Home from './app/Home';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

