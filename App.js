import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CartaoTarefa from './components/CartaoTarefa';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <CartaoTarefa
        titulo="Estudar React Native"
        categoria="Estudo"
        prazo="10/04/2026"
        concluida={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
