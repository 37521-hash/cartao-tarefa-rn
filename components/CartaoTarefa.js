import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

/**
 * CartaoTarefa
 *
 * Props:
 *  - titulo (string)
 *  - categoria (string)
 *  - prazo (string)
 *  - concluida (boolean)
 *
 * O status (Concluída/Pendente) é decidido com um operador ternário
 * dentro do próprio JSX, trocando tanto o texto quanto a cor conforme
 * o valor de "concluida".
 */
export default function CartaoTarefa({ titulo, categoria, prazo, concluida }) {

  function handleVerDetalhes() {
    Alert.alert(
      titulo,
      'Prazo: ' + prazo
    );
  }

  return (
    <View style={styles.cartao}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.linha}>
        Categoria: <Text style={styles.valor}>{categoria}</Text>
      </Text>

      <Text style={styles.linha}>
        Prazo: <Text style={styles.valor}>{prazo}</Text>
      </Text>

      <Text style={styles.linha}>
        Status:{' '}
        <Text style={concluida ? styles.statusConcluida : styles.statusPendente}>
          {concluida ? 'Concluída' : 'Pendente'}
        </Text>
      </Text>

      <TouchableOpacity style={styles.botao} onPress={handleVerDetalhes}>
        <Text style={styles.textoBotao}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  linha: {
    fontSize: 14,
    color: '#4a4a4a',
    marginBottom: 4,
  },
  valor: {
    fontWeight: '600',
    color: '#1a1a1a',
  },
  statusConcluida: {
    fontWeight: 'bold',
    color: 'green',
  },
  statusPendente: {
    fontWeight: 'bold',
    color: 'red',
  },
  botao: {
    marginTop: 12,
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
