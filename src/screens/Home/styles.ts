import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  eventName: {
    marginTop: 48,
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#1F1E25',
    color: '#FFF',
  },
  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
});
