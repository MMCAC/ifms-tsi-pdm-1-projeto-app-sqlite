import { View, Text, TextInput } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function NewScreen() {

  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [porteAnimal, setPorteAnimal] = useState('');
  const [corPredominante, setCorPredominante] = useState('');
  const [observacoes, setObservacoes] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar um Pet</Text>

      <TextInput 
        style={styles.input}
        placeholder='Espécie'
        autoCapitalize='words'
      />
      
    </View>
  )
}