import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.drawerHeader}>
        <Icon name="atom" size={50} color="white" />
          <Text style={styles.headerText}>Cristiano xd</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#007bff', // Fondo azul para todo el drawer
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#007bff', // Fondo azul para el contenido del DrawerContentScrollView
  },
  drawerHeader: {
    backgroundColor: '#007bff', // Color de fondo azul consistente
    paddingVertical: 25,
    paddingHorizontal: 30,
    flexDirection: 'row', // Alinea los elementos en fila
    justifyContent: 'space-between', // Espacio entre el texto y el ícono
    alignItems: 'center', // Centra verticalmente
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default CustomDrawerContent;