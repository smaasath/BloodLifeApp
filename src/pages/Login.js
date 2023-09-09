
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStructure from '../components/LoginStructure';
import InputTextCon from '../components/inputTextCon';
import EncryptedStorage from 'react-native-encrypted-storage';
import { fetchData } from '../services/FetchLogin';



export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageUser, seterrorMessageUser] = useState('');
  const [errorMessagePassword, seterrorMessagePassword] = useState('');





  const Login = () => {

    var URL = "http://localhost:8081//bloodlife/Api/login.php";

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      UserName: username,
      password: password,
    };

    fetch(URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
      .then((response) => {
        if (!response.ok) {
          alert("Something Went Wrong !! Try Again");
        }
        return response.json();
      })
      .then((response) => {
        allowLog(response.message, response.user);
        console.log(response.message, response.user);

      })
      .catch((error) => {
        
      });
  };



  const allowLog = (message, array) => {
    if (message == true && array.userRole == 5) {
      navDash();
      storeUserSession(array.donorId,array.bloodBankId);
    } else {
      alert("Invalid User Name or Password");
    }
  }

 

  async function storeUserSession(donorId,bloodBankId) {
    try {
      await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
          donorId: donorId,
          bloodBankId:bloodBankId

        })
      );


    } catch (error) {
      alert("Something Went Wrong !! Try Again")
    }
  }

  const navigation = useNavigation();

  const navForgotPass1 = () => {
    navigation.navigate('forgotPassword1')

  }

  const navDash = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };


  const vaitation = () => {

    seterrorMessageUser('');
    seterrorMessagePassword('');

    if (username === '') {
      seterrorMessageUser('User Name is Required');
    }

    // Validate password
    if (password === '') {
      seterrorMessagePassword('Password Is Required');
    }

    // If both fields are non-empty, you can proceed with further actions.
    if (username !== '' && password !== '') {
      Login();
     

    }
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
      <Text style={{ color: "red" }}>{errorMessageUser}</Text>
      <View style={styles.breakElement} />

      <View style={styles.break} />
      <InputTextCon
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        value={password}
        password={true}

      />
      <Text style={{ color: "red" }}>{errorMessagePassword}</Text>
      <View style={styles.break} />
      <View style={{ width: '95%' }}>
        <TouchableOpacity onPress={navForgotPass1}><Text style={{ color: '#3498DB', textAlign: 'right', }}>Forgot Password?</Text></TouchableOpacity>
      </View>

      <View style={styles.breakElement} />
      <View style={styles.buttonelement}>
        <TouchableOpacity onPress={vaitation} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Login</Text></TouchableOpacity>
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