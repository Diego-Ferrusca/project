import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener esta librería instalada
import 'react-native-gesture-handler'; // Importar esto para el manejo de gestos
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const navigation = useNavigation(); 

  return (
   
        <View style={styles.container}> 
          <TouchableOpacity style={{borderColor:'black'}} onPress={() => navigation.navigate('Settings') }>
            <View style={{ borderColor:'black', borderWidth: 1,  alignContent:'center', alignItems:'center'}}>
                <Icon name="home" size={60} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'gray', marginTop: 10}}>
            <View style={{backgroundColor:'gray', alignContent:'center', alignItems:'center'}}>
            <Icon name="apps-outline" size={60} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'gray', marginTop: 10}}>
            <View style={{backgroundColor:'gray', alignContent:'center', alignItems:'center'}}>
            <Icon name="bar-chart" size={60} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'gray', marginTop: 10}}>
            <View style={{backgroundColor:'gray', alignContent:'center', alignItems:'center'}}>
            <Icon name="fitness" size={60} color="black" />
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity style={{backgroundColor:'gray', marginTop: 10}}>
            <View style={{backgroundColor:'gray', alignContent:'center', alignItems:'center'}}>
            <Icon name="folder" size={60} color="black" />
            </View>
          </TouchableOpacity>

          
          <TouchableOpacity style={{backgroundColor:'gray', marginTop: 10}}>
            <View style={{backgroundColor:'gray', alignContent:'center', alignItems:'center'}}>
            <Icon name="grid" size={60} color="black" />
            </View>
          </TouchableOpacity>
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
    marginTop:10,
    marginHorizontal:20,
    backgroundColor: '#f7f7f7',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


// Asegúrate de importar useNavigation


export default HomeScreen;
