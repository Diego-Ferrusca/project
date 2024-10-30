import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener esta librería instalada
import 'react-native-gesture-handler'; // Importar esto para el manejo de gestos
import { useNavigation } from '@react-navigation/native';



const SettingsScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.header}>
        <View> 
            <Text>Hola el diego es un puto </Text>
        </View>
     
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0090e3', // Color de fondo azul
    padding: 15,
    flexDirection: 'row', // Organiza los elementos horizontalmente
    alignItems: 'center', // Alinea los elementos verticalmente al centro
  },
  title: {
    color: 'white', // Texto blanco
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20, // Añadir espacio después del ícono
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


// Asegúrate de importar useNavigation


export default SettingsScreen;
