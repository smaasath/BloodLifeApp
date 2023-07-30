
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStructure from '../components/LoginStructure';
import InputTextCon from '../components/inputTextCon';




const credentials = [
  { username: 'aasath', password: '123' },
  // Add more credentials if needed
];

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Check if the entered credentials match any in the array
    const matchedCredentials = credentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (matchedCredentials) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
      // Add navigation logic here to navigate to the next screen on successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };


  const navigation = useNavigation();

  const navForgotPass1 = () => {
    navigation.navigate('forgotPassword1')

  }




  return (


    <LoginStructure>


      <View style={styles.break} />
      <InputTextCon
        onChangeText={(text) => setUsername(text)}
        placeholder="User Name"
        value={username}
        password={false}

      />
      <View style={styles.breakElement} />

      <View style={styles.break} />
      <InputTextCon
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        value={password}
        password={true}

      />
      <View style={styles.break} />
      <View style={{ width: '95%' }}>
        <TouchableOpacity onPress={navForgotPass1}><Text style={{ color: '#3498DB', textAlign: 'right', }}>Forgot Password?</Text></TouchableOpacity>
      </View>

      <View style={styles.breakElement} />
      <View style={styles.buttonelement}>
        <TouchableOpacity onPress={handleLogin} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Login</Text></TouchableOpacity>
      </View>


    </LoginStructure>








  );
}

const styles = StyleSheet.create({


  logbutton: {
    backgroundColor: '#BD1616',
    width: 120,
    height: 38,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",



  },


  break: {
    height: 10,
  },

  breakElement: {
    height: 30,
  },

  buttonelement: {

    alignItems: "center",
    width: '100%',
    zIndex: 10,
  },

});