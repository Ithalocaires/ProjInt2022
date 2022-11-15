import * as React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity,} from 'react-native';

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Bem vindo ao City App</Text>
        </View>

        <View style={styles.containerbtn}>
        <TouchableOpacity
        onPress={() => navigation.navigate('EmergencyNumbers')}
        style={styles.btnSubmit}>
          <Text style={styles.submitText}> Números de Emergência </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={() => navigation.navigate('Complaint')}
        style={styles.btnSubmit}>
          <Text style={styles.submitText}> Fazer Denúncia </Text>
        </TouchableOpacity>
      </View>
   
    </SafeAreaView>
  );
}


export default Home;

const styles = StyleSheet.create({
  containerAPI: {
    flex: 0.2,
    justifyContent: 'center',
  },
  apiImage:{
    width: 400,
    height: 400,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  container: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  containerbtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  textWelcome: {
    color: '#FFF',
    fontSize: 20,
    margin: 10,
  },
  viewWelcome: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  btnSubmit: {
    backgroundColor: '#bf4b2e',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    margin: 20,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },

});