import { View, Text } from 'react-native';
import { styles } from './style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adote um Pet</Text>
    </View>
  )
}