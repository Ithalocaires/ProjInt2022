import react, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert} from 'react-native';



function ResetPassword({navigation}) {
  return (
   <KeyboardAvoidingView style={styles.background}>
    <TextInput
        placeholder='E-mail' 
        style={styles.input}
        autoCorrect={false}
        onChangeText={() => {}}
    />
     <TextInput
        placeholder='Senha nova' 
        style={styles.input}
        autoCorrect={false}
        onChangeText={() => {}}
    />
     <TextInput
        placeholder='Confirmar Senha' 
        style={styles.input}
        autoCorrect={false}
        onChangeText={() => {}}
    />
    <TouchableOpacity
         onPress={() => {alert("Senha alterada com sucesso") ;navigation.navigate('Login')}}
         style={styles.btnSubmit}>
          <Text style={styles.submitText}> Confirmar </Text>
        </TouchableOpacity>
   </KeyboardAvoidingView>
  );
}


export default ResetPassword;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#121212',
    },
    textWelcome: {
      color: '#FFF',
      fontSize: 20,
    },
    viewWelcome: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    viewEndereço :{
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: '#191919',
      alignContent: "space-between"
    },
    inputEndereço: {
        backgroundColor: '#FFF',
        width: '42%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginHorizontal: 12,
    },
    btnSubmit: {
        backgroundColor: '#bf4b2e',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
      },
      submitText: {
        color: '#FFF',
        fontSize: 18,
      },
  
  });