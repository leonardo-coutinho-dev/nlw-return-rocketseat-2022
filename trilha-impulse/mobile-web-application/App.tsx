import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from './src/components/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <Container />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ABA08E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
