import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {name as appName} from './app.json';
import MainView from './src/MainView';

export default function App() {
  return (
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
    <View style={{
      backgroundColor: '#000000',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
      }}>
      <MainView showText = {appName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
