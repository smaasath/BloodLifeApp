/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Login from './src/pages/Login';
import Dashboard from './src/pages/dashboard';
import ForgotPassword1 from './src/pages/ForgotPassword1';
import ForgotPassword2 from './src/pages/ForgotPassword2';
import ForgotPassword3 from './src/pages/ForgotPassword3';
import ForgotPassword4 from './src/pages/ForgotPassword4';
import Certificate from './src/pages/Certificate';
import QrMain from './src/pages/QrMain';








const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="forgotPassword1" component={ForgotPassword1} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword3" component={ForgotPassword3} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword4" component={ForgotPassword4} options={{ headerShown: false }} />
        <Stack.Screen name="Certificate" component={Certificate}/>
        <Stack.Screen name="QrMain" component={QrMain}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
