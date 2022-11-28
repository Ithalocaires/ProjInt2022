import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Animated, Keyboard} from 'react-native';
import Icon from '/ProjInt2022/node_modules/react-native-vector-icons/AntDesign'




function Complaint(){
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:400, y:500}));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 10,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  }, []);

  function keyboardDidShow(){

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 400,
        duration: 20,
      }),
      Animated.timing(logo.y, {
        toValue: 260,
        duration: 20,
      }),
    ]).start();
  }

  function keyboardDidHide(){

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 400,
        duration: 20,
      }),
      Animated.timing(logo.y, {
        toValue: 500,
        duration: 20,
      }),
    ]).start();

  }

    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.containerAPI}>
                <Animated.Image 
                style={{
                    width: logo.x,
                    height: logo.y,
                  }}
                source={require('/ProjInt2022/src/img/testejpeg.jpeg')}/>
            </View>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Descreva a denuncia"
                autoCorrect={false}
                numberOfLines={4}
                onChangeText={() => {}}
                maxLength={200}
                textAlign="left"
                multiline={true}
                placeholderTextColor='#fff'
            />
            <TouchableOpacity style={styles.roundBtn} o />
            <Icon
            name="camera"
            color="#fff"
            size={25}
            />
            <TouchableOpacity
             onPress={() => alert("Denuncia feita com sucesso")}
             style={styles.btnSubmit}>
                <Text style={styles.submitText}> Enviar denuncia </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Complaint;

const styles = StyleSheet.create({
    icon:{
      position:'absolute',
      alignItems:'flex-end',
    },
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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    btnSubmit: {
      backgroundColor: '#bf4b2e',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      margin: 30,
    },
    submitText: {
      color: '#fff',
      fontSize: 18,
    },
    input: {
      backgroundColor: '#181818',
      borderWidth: 2,
      marginTop: 90,
      width: '98%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
      color: '#fff',
      borderColor: '#5F5F5F'
    },
    roundBtn: {
      backgroundColor: "#fff",
      margin: 20,
      borderRadius: 150,
      width: 80,
      height: 80,
      alignItems: "center",
      justifyContent: "center"
      },
  });