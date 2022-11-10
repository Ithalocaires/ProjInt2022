import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native"; 

function Register({navigation}){
    return (
      <KeyboardAvoidingView style={styles.background}>
       <View style={styles.viewWelcome}>
        <Text style={styles.textWelcome}>Cadastro</Text>
       </View>
       <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <View style={styles.viewEndereço}>
            <TextInput
            style={styles.inputEndereço}
            placeholder="Rua"
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TextInput
            style={styles.inputEndereço}
            placeholder="Bairro"
            autoCorrect={false}
            onChangeText={() => {}}
            />
        </View>
        <TouchableOpacity
         onPress={() => {alert("Conta criada com sucesso") ;navigation.navigate('Login')}}
         style={styles.btnSubmit}>
          <Text style={styles.submitText}> Confirmar </Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
      );

}

export default Register;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919',
    },
    textWelcome: {
      color: '#FFF',
      fontSize: 20,
    },
    viewWelcome: {
      flex: 0.2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#191919',
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