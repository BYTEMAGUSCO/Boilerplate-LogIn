// screens/AdminScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import styles from '../styles/AdminScreenStyles';

const AdminScreen = ({ navigation }) => {
  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      Alert.alert("Success", "Logged out successfully");
      navigation.navigate('Login'); // Navigate to the Login screen after logout
    }).catch((error) => {
      Alert.alert("Error", "Failed to log out: " + error.message);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminScreen;
