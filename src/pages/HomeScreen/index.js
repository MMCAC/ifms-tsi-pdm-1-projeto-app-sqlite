import { 
  View, 
  Text, 
  FlatList,
} from 'react-native';
import { styles } from './style';
import Item from '../../components/Item';

export default function HomeScreen() {

  data = [
    {
      id: 1,
      especie: 'Cachorro',
      nome: 'José Luis',
      raca: 'SRD',
      porteAnimal: 'pequeno',
      corPredominante: 'caramelo',
      observacao: 'Foi perdido próximo ao supermercado'
    },
    {
      id: 2,
      especie: 'Gato',
      nome: 'Zoe',
      raca: 'SRD',
      porteAnimal: 'pequeno',
      corPredominante: 'cinza',
      observacao: 'Foi perdido próximo à rodoviária.'
    },
    {
      id: 3,
      especie: 'Cachorro',
      nome: 'Jaquinha',
      raca: 'SRD',
      porteAnimal: 'médio',
      corPredominante: 'preto e amarelo',
      observacao: 'Foi perdido próximo à padaria.'
    },
    
    {
      id: 4,
      especie: 'Gato',
      nome: 'Luiza',
      raca: 'Angorá',
      porteAnimal: 'pequeno',
      corPredominante: 'marrom',
      observacao: 'Fugiu de casa.'
    },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adote um Pet</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <Item pet={item} especie={item.especie} raca={item.raca} nome={item.nome} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}