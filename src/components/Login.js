
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';



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
      alert('Login successful!');
      // Add navigation logic here to navigate to the next screen on successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

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
              <View style={styles.rowcon4}>
                <View style={styles.row4}>
                  <View style={styles.rowcon4}>
                    <Text style={{ color: '#000' }}>User Name</Text>
                  </View>
                </View>
                <View style={styles.row4}>
                  <View style={styles.rowcon4}>
                    <TextInput
                      style={styles.input}
                      placeholder="User Name"
                      value={username}
                      onChangeText={(text) => setUsername(text)}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.row4}>
              <View style={styles.rowcon4}>
                <View style={styles.row4}>
                  <View style={styles.rowcon4}>
                    <Text style={{ color: '#000' }}>Password</Text>
                  </View>
                </View>
                <View style={styles.row4}>
                  <View style={styles.rowcon4}>
                    <TextInput
                      style={styles.input}
                      secureTextEntry
                      placeholder="Password"
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                    />
                  </View>
                </View>
              </View>
            </View>


            <View style={styles.row4}>
              <View style={styles.rowcon4}>
                <TouchableOpacity onPress={handleLogin} style={styles.logbutton} ><Text>Login</Text></TouchableOpacity>
              </View>
            </View>

            <View style={styles.row4}>
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

  rowcon4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },

  rowcon5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },

  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
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
    borderRadius:20,
    justifyContent: "center",
    alignItems: "center",


  },

});