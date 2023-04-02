import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
  },
  name: {
    flex: 1,
    marginLeft: 16,
    color: '#FFF',
    fontSize: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
});
