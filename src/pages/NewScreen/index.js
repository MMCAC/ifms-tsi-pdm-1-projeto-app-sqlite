import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function NewScreen() {

  // hooks para manipular os dados do formulário
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [porteAnimal, setPorteAnimal] = useState('');
  const [corPredominante, setCorPredominante] = useState('');
  const [observacoes, setObservacoes] = useState('');

  // função para salvar o Pet
  const salvarPet = () => {
    // // validação
    // if (especie == '') {
    //   console.log('asdf')
    //   Alert.alert(
    //     'Atenção!',
    //     'Você deve preencher o campo Espécie'
    //   )
    // }

    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar um Pet</Text>

      <TextInput 
        style={styles.input}
        placeholder='Espécie'
        autoCapitalize='words'
        value={especie}
        onChangeText={({v}) => setEspecie(v)}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Raça'
        autoCapitalize='words'
        value={raca}
        onChangeText={({v}) => setRaca(v)}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Porte do Pet'
        autoCapitalize='words'
        value={porteAnimal}
        onChangeText={({v}) => setPorteAnimal(v)}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Cor predominante do pet'
        autoCapitalize='words'
        value={corPredominante}
        onChangeText={({v}) => setCorPredominante(v)}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Observações'
        autoCapitalize='words'
        value={observacoes}
        onChangeText={({v}) => setObservacoes(v)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => salvarPet()}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>



      
    </View>
  )
}