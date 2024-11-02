import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de tener esta librería instalada
import 'react-native-gesture-handler'; // Importar esto para el manejo de gestos
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CustomDrawerContent from './CustomDrawerContent';
// Crea el Drawer Navigator


const Navigation = () => {
    const Drawer = createDrawerNavigator();

  return (
  <NavigationContainer>

 
 
        <Drawer.Navigator
        initialRouteName='Home'
      backBehavior="history"
      screenOptions={{
        
        headerStyle: {
          //  backgroundColor: '#f2789f',
          backgroundColor: '#0090e3',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        // drawerType: 'slide',
      }} 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{  
              drawerIcon: () => <Icon name="home" size={24} color="white" />,
              drawerLabel: () => (
                <Text style={{ color: 'white' }}>Home</Text> // Estilo para el nombre "Home"
              ),
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Text style={styles.title}> Lam_Tec</Text>
             
                </View>
              ),
          
            }} 
            
          />
          <Drawer.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
              drawerIcon: () => <Icon name="settings" size={24} color="white" />,
              drawerLabel: () => (
                <Text style={{ color: 'white' }}>Settings</Text> // Estilo para el nombre "Home"
              ),
              headerTitle: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                    <Text style={styles.title}> Lam_Tec</Text>
             
                </View>
              ),
          
            }} 
          />
        </Drawer.Navigator>

        </NavigationContainer>
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


export default Navigation;
