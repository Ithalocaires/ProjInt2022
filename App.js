import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './src/screens/login'
import Home from './src/screens/home';
import Register from './src/screens/register';
import ResetPassword from './src/screens/resetPassword';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
              backgroundColor: "#bf4b2e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name='Home' component={Home} options={{
            headerStyle: {
              backgroundColor: "#bf4b2e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
          }} />
          <Stack.Screen name='Register' component={Register} options={{
            headerStyle: {
              backgroundColor: "#bf4b2e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            title:'Cadastro',
          }} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} options={{
            headerStyle: {
              backgroundColor: "#bf4b2e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            title:'Redefinição de Senha',
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;