import React from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, Linking,} from 'react-native';

function EmergencyNumbers(){
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
             <TouchableOpacity
             onPress={()=>{Linking.openURL('tel:190');}}
             style={styles.btnSubmit}>
              <Text style={styles.submitText}> POLÍCIA MILITAR 190 </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{Linking.openURL('tel:193');}}
             style={styles.btnSubmit}>
              <Text style={styles.submitText}> BOMBEIROS 193 </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{Linking.openURL('tel:197');}}
             style={styles.btnSubmit}>
              <Text style={styles.submitText}> POLÍCIA CIVIL 197 </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{Linking.openURL('tel:181');}}
             style={styles.btnSubmit}>
              <Text style={styles.submitText}> DISQUE DENÚNCIA 181 </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{Linking.openURL('tel:192');}}
             style={styles.btnSubmit}>
              <Text style={styles.submitText}> SAMU 192 </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={()=>{Linking.openURL('tel:180');}}
             style={styles.btnSubmit}>
              <Text style={styles.submitText}> ATENDIMENTO À MULHER 180 </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default EmergencyNumbers;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    btnSubmit: {
      backgroundColor: '#DAA51C',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      margin: 30,
    },
    submitText: {
      color: '#000',
      fontSize: 18,
    },
  
  });