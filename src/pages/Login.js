
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStructure from '../components/LoginStructure';
import InputTextCon from '../components/inputTextCon';
import EncryptedStorage from 'react-native-encrypted-storage';
import { fetchData } from '../services/FetchLogin';
import { TextInput } from 'react-native-paper';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import InputConPassword from '../components/InputConPassword';



export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageUser, seterrorMessageUser] = useState('');
  const [errorMessagePassword, seterrorMessagePassword] = useState('');
  const [passwordshow, setpasswordshow] = useState(true);





  const Login = () => {

    var URL = "http://localhost:8081//bloodlife/Api/login.php";

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      email: username,
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
        allowLog(response.message, response.Token);


      })
      .catch((error) => {
        alert("Something Went Wrong !! Try Again");
      });
  };



  const allowLog = (message, Token) => {
    if (message == true) {
      storeUserSession(Token);
      navDash();

    } else {
      alert(message);
    }
  }



  async function storeUserSession(Token) {
    try {
      await EncryptedStorage.setItem(
        "user_session",
        JSON.stringify({
          Token: Token

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

  const navRegister = () => {
    navigation.navigate('DonorRegister')

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

    const gmailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;

   // Validate Email
    if (username === '' || !gmailRegex.test(username)) {
      seterrorMessageUser('Email is Required');
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


      <View style={{ width: "100%", padding: 10, }} >

        <InputTextCon
          onChangeText={(text) => setUsername(text)}
          label={"Email"}
          value={username}
          inputMode={"email"}
          url={"https://img.icons8.com/ios-filled/50/gmail.png"}
        />

        <Text style={{ color: "red" }}>{errorMessageUser}</Text>
        <View style={styles.breakElement} />

        <View style={styles.break} />


        <InputConPassword
          label="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}

        />

        <Text style={{ color: "red" }}>{errorMessagePassword}</Text>
        <View style={styles.breakElement} />

        <View style={styles.buttonelement}>
          <TouchableOpacity onPress={vaitation} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Login</Text></TouchableOpacity>
        </View>

        <View style={styles.breakElement} />
        <View style={{ width: '95%', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={navForgotPass1}><Text style={{ color: '#3498DB', textAlign: 'right', }}>Forgot Password?</Text></TouchableOpacity>
          </View>
        </View>


        <View style={styles.breakbottom} />


        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "center",justifyContent:"center"}}>
            <Text style={{ color: 'black', textAlign: 'right', fontSize: 15 }}>Didn't have an Account?  <Text onPress={navRegister} style={{ color: 'green', textAlign: 'right', }}>Sign Up</Text></Text>
          </View>
        </View>
      </View>

    </LoginStructure>








  );
}

const styles = StyleSheet.create({


  logbutton: {
    backgroundColor: '#BD1616',
    width: "100%",
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

  breakbottom: {
    height: 130,
  },

  buttonelement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    zIndex: 10,
  },

});