import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#9E68CA',
    fontSize: 24,
    paddingVertical: 10,
    color: '#fff',
    fontWeight: '600',
  },
  input: {
    marginTop: 16,
    width: '70%',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#9E68CA',
    borderRadius: 4,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#9E68CA',
    width: '40%',
    paddingVertical: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

