// screens/HomeScreenStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop:80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#b22222', // You can add this color for consistency
  },
  contact: {
    padding: 15,
    backgroundColor: '#fff5f5',
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#b22222',
    borderWidth: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b22222',
  },
  logoutButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
