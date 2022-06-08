import { View, StyleSheet, Text } from 'react-native';

export default function Container() {
  return (
    <View style={styles.container}>
      <Text style={{width: '100%', color: '#000000', textAlign: 'center'}}>Esse é o container!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#ebebeb"
  }
})