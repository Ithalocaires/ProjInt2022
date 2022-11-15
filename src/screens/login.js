import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from 'react-native';


export default function Login({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:250, y:270}));

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
          toValue: 90,
          duration: 100,
        }),
        Animated.timing(logo.y, {
          toValue: 70,
          duration: 100,
        }),
      ]).start();
    }

    function keyboardDidHide(){

      Animated.parallel([
        Animated.timing(logo.x, {
          toValue: 250,
          duration: 100,
        }),
        Animated.timing(logo.y, {
          toValue: 270,
          duration: 100,
        }),
      ]).start();

    }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo} >
        <Animated.Image
        style={{
          width: logo.x,
          height: logo.y,
        }}
         source={require('/ProjInt2022/src/img/logo2.png')}/>
        </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
          secureTextEntry={true}
        />
        <TouchableOpacity
         onPress={() => navigation.navigate('Home')}
         style={styles.btnSubmit}>
          <Text style={styles.submitText}> Acessar </Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate('Register')}
         style={styles.btnRegister}>
          <Text style={styles.registerText}> Criar conta</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
         onPress={() => navigation.navigate('ResetPassword')}
         style={styles.btnRegister}>
          <Text style={styles.registerText}> Esqueci a senha</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  containerLogo: {
    flex: 0.7,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
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
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF',
  },
});
