import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{padding: '20px'}}>Meu nome é Leonardo Coutinho dos Santos, moro na cidade de Salvador, no estado da Bahia e sou programador. Atualmente, estou estudando desenvolvimento de aplicativos usando react native.</Text>
      <Text>Esse é o meu primeiro aplicativo! great hack</Text>
      <StatusBar style="auto" />
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
