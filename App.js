

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
import EditProfile from './src/pages/EditProfile';
import DonorRegister from './src/pages/DonorRegister';
import { Provider } from 'react-redux';
import { Store } from './src/Redux/Store';
import MedicalRepoer from './src/pages/MedicalRepoer';










const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="forgotPassword1" component={ForgotPassword1} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword3" component={ForgotPassword3} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword4" component={ForgotPassword4} options={{ headerShown: false }} />
          <Stack.Screen name="Certificate" component={Certificate} />
          <Stack.Screen name="QrMain" component={QrMain} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="MedicalRepoer" component={MedicalRepoer} />
          <Stack.Screen name="DonorRegister" component={DonorRegister} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  );
}

export default App;
