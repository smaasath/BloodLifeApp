import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Alert } from 'react-native'
import React, { useState } from 'react';
import LoginStructure from '../components/LoginStructure'
import { useNavigation } from '@react-navigation/native';




export default function ForgotPassword1() {

    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const navForgotPass2 = () => {
        navigation.navigate('ForgotPassword2')
    
      }

    const handleEmailValidation = () => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            navForgotPass2();
        } else {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
        }
    };

    return (
        <LoginStructure>
            <View style={styles.backbutton}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../../assets/BackImage.png')} style={{ height: 72, width: 72, }}></Image></TouchableOpacity>
            </View>

            <View style={styles.forgotTextCon}>
                <Text style={styles.forgetText}>Forgot Password?</Text>
                <View style={styles.break} />
                <Text style={styles.forgetTextnormal}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
            </View>

            <View style={styles.break} />

            <View style={styles.break} />

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#000"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
             
             <View style={styles.break} /> 
            <View style={styles.break} />
            <View style={styles.buttonelement}>
            <TouchableOpacity onPress={handleEmailValidation} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Next</Text></TouchableOpacity>
            </View>

        </LoginStructure>
    )
}

const styles = StyleSheet.create({

    backbutton: {
        marginTop: -45,

    },

    forgetTextCon: {},
    forgetTextnormal: {
        color: '#8391A1',
        fontSize: 16,


    },
    forgetText: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },


    break: {
        height: 20,
    },

    input: {
        width: '95%',
        height: 55,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
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

      buttonelement: {

        alignItems: "flex-end",
        width: '100%',
        zIndex: 10,
       marginLeft: -10,
      },
})