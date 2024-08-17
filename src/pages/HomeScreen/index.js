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
      raca: 'SRD',
      porteAnimal: 'pequeno',
      corPredominante: 'caramelo',
      observacao: 'Foi perdido próximo ao supermercado'
    },
    {
      id: 2,
      especie: 'Gato',
      raca: 'SRD',
      porteAnimal: 'pequeno',
      corPredominante: 'cinza',
      observacao: 'Foi perdido próximo à rodoviária.'
    },
  ];


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adote um Pet</Text>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <Item especie={item.especie} raca={item.raca} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}