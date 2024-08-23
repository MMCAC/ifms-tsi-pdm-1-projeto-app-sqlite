import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Item({ pet }) {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        {
          pet.especie === 'Cachorro' ? 
          <FontAwesome5 name='dog' size={12} /> :
          <FontAwesome5 name='cat' size={12} />
        }
        <Text style={styles.tituloTexto}>{pet.especie}</Text>
        <Text style={styles.tituloTexto}>{pet.nome}</Text>
      </View>

      <View style={styles.descricaoContainer}>
        <Text style={styles.descricaoTexto}>Raça: {pet.raca}</Text>
        <Text style={styles.descricaoTexto}>Porte: {pet.porteAnimal}</Text>
        <Text style={styles.descricaoTexto}>Cor: {pet.corPredominante}</Text>
        <Text style={styles.descricaoTexto}>Obs: {pet.observacao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 8,
  },
  tituloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    backgroundColor: '#E4CEF2',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tituloTexto: {
    fontWeight: '500',
  },
  descricaoContainer: {
    width: 280,
    backgroundColor: '#e8e8e8e8',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  descricaoTexto: {},
});