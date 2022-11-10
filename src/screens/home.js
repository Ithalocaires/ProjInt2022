import * as React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView} from 'react-native';

function Home() {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>

      <View style={styles.containerAPI}>
        <Image 
        source={require('/ProjInt2022/src/img/testejpeg.jpeg')}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.textWelcome}>Bem vindo</Text>
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}


export default Home;

const styles = StyleSheet.create({
  containerAPI: {
    flex: 0.7,
    justifyContent: 'center',
  },
  apiImage:{
    width: 350,
    height: 450,
  },
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
  textWelcome: {
    color: '#FFF',
    fontSize: 20,
  },
  viewWelcome: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
  }

});