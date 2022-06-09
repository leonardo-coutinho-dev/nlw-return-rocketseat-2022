import React from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';

export default function Container() {

  function handleClick() {
    return;
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#10E361', textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginBottom: 15 }}>Olá Bruna RSC, esse é meu primeiro App.</Text>
      <Text style={{color: '#10E361', textAlign: 'center', fontSize: 12, fontStyle: 'italic', marginBottom: 15}}>~Leo</Text>
      <Button 
        title="Aperte o botão!" 
        onPress={() => Alert.alert('Eu te amo, princesa!')}
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#000000"
  }
})