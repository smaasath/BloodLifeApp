
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



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

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputBorderColor = isFocused ? '#2E86C1' : 'gray';


  return (

    <View style={styles.container}>
      <View style={styles.container}>

        <View style={styles.row3}>
          <View style={styles.rowcon4}>
            <Image source={require('../../assets/loginlogo.png')} style={{ height: 178, width: 178, }}></Image>
          </View>
        </View>
        <View style={styles.row4}>
          <View style={styles.rowcon5}>
            <View style={styles.row4}>
              <View style={styles.rowcon9}>
                <View style={styles.row4}>
                  <View style={styles.rowcon8}>
                    <Text style={{ color: '#000' }}>User Name</Text>
                    <View style={styles.break} />
                    <TextInput
                      style={[styles.input,{ borderColor: inputBorderColor }]}
                      placeholder="User Name"
                      placeholderTextColor="#000"
                      value={username}
                      onChangeText={(text) => setUsername(text)}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <View style={styles.breakElement} />
                    <Text style={{ color: '#000' }}>Password</Text>
                    <View style={styles.break} />
                    <TextInput
                      style={[styles.input,{ borderColor: inputBorderColor }]}
                      secureTextEntry
                      placeholder="Password"
                      placeholderTextColor="#000"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                    <View style={styles.break} />
                    <View style={{ width: '95%' }}>
                      <TouchableOpacity onPress={navForgotPass1}><Text style={{ color: '#3498DB', textAlign: 'right', }}>Forgot Password?</Text></TouchableOpacity>
                    </View>

                    <View style={styles.breakElement} />
                    <View style={styles.buttonelement}>
                      <TouchableOpacity onPress={handleLogin} style={styles.logbutton} ><Text>Login</Text></TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>






            <View style={styles.rowimage}>
              <View style={styles.rowcon4}>
                <Image source={require('../../assets/loginbottumimage.png')} style={{ height: 178, width: '100%', marginBottom: -150, }}></Image>
              </View>
            </View>
          </View>
        </View>

      </View>
    </View>








  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#BD1616",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  row3: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#BD1616",


  },

  row4: {
    backgroundColor: "#fff",
    flex: 3,
    flexDirection: "row",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,

  },

  rowimage: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",

    zIndex: -1,


  },

  rowbut: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,




  },

  rowcon4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },

  rowcon9: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",

  },

  rowcon8: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginTop: 50,

  },

  rowcon5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",


  },

  input: {
    width: '95%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#EFEFEF',
    color: '#000',
  },

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