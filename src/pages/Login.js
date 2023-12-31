
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStructure from '../components/LoginStructure';
import EncryptedStorage from 'react-native-encrypted-storage';
import { fetchData } from '../services/FetchLogin';
import { TextInput } from 'react-native-paper';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import InputField from '../components/InputField';
import LoginUser from '../services/LoginUser';
import { tostMessage } from '../services/Validations';
import { useSelector, useDispatch } from 'react-redux';
import { setUserToken } from '../Redux/Action/RegisterAction';






export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageUser, seterrorMessageUser] = useState('');
  const [errorMessagePassword, seterrorMessagePassword] = useState('');
  const [passwordshow, setpasswordshow] = useState(true);


  const dispatch = useDispatch();
  





  const Login = async() => {
    try {
      const data = await LoginUser(username,password);
      if (data.message === true) {
        storeUserSession(data.Token);
        dispatch(setUserToken(data.Token));
        navDash();
      } else {
          tostMessage(data.message);
      }
  } catch (error) {
      console.error('login error', error);
  }
    
  };





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


      <View>

        <InputField
          onChangeText={(text) => setUsername(text)}
          placeholder={"Email"}
          inputMode={"email"}
          url={"https://img.icons8.com/ios-filled/50/gmail.png"}
        >

        </InputField>


        <Text style={{ color: "red",paddingLeft:25 }}>{errorMessageUser}</Text>
  

        <InputField
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          url={"https://img.icons8.com/ios-glyphs/30/password.png"}
          inputMode={"text"}
        >
        </InputField>
 

        <Text style={{ color: "red",paddingLeft:25 }}>{errorMessagePassword}</Text>

        <View style={styles.breakElement} />
        <View style={{ width: '95%', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={navForgotPass1}><Text style={{ color: '#3498DB', textAlign: 'right', }}>Forgot Password?</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonelement}>
          <TouchableOpacity onPress={vaitation} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Login</Text></TouchableOpacity>
        </View>

    


        <View style={styles.breakbottom} />


        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
    width: "30%",
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
    height: 70,
  },

  buttonelement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 10,
    padding:25,
  },

});