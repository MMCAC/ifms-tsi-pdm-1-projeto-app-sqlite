import { View, Text, StyleSheet } from 'react-native';

export default function Item(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.especie}>{props.especie}</Text>
      <Text style={styles.raca}>{props.raca}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#93C9FF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 6,
  },
  especie: {
    fontWeight: '500',
  },
  raca: {
    fontSize: 12,
  },
});