// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { signOut } from "firebase/auth";
import { auth, db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = () => {
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsCollection = collection(db, "contacts");
      const contactsSnapshot = await getDocs(contactsCollection);
      const contactsList = contactsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          telephone: Array.isArray(data.telephone) ? data.telephone : [],
          mobile: Array.isArray(data.mobile) ? data.mobile : [],
        };
      });
      setContacts(contactsList);
    };

    fetchContacts();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Logged Out", "You have successfully logged out.");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch(error => Alert.alert("Logout Failed", error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Dashboard</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <Text style={styles.contactName}>{item.name}</Text>
            
            {/* Display each telephone number if present */}
            {item.telephone.length > 0 &&
              item.telephone.map((tel, index) => (
                <Text key={index} style={styles.contactDetail}>
                  Telephone {index + 1}: {tel}
                </Text>
              ))
            }

            {/* Display each mobile number if present */}
            {item.mobile.length > 0 &&
              item.mobile.map((mob, index) => (
                <Text key={index} style={styles.contactDetail}>
                  Mobile {index + 1}: {mob}
                </Text>
              ))
            }
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
