import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';



export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, marginTop: 10, marginBottom: 10, textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
        Olá mundo!
      </Text>
    </View>
  );
}