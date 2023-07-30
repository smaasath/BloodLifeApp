import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import LoginStructure from '../components/LoginStructure'
import { useNavigation } from '@react-navigation/native';




export default function ForgotPassword1() {


    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const navForgotPass3 = () => {
        navigation.navigate('ForgotPassword3')

    }


    const codeVerification = () => {
       

        if (code==123) {
            navForgotPass3();
        } else {
            Alert.alert('You Entered Wrong Verification Code!!');
        }
    };

    return (
        <LoginStructure>
            <View style={styles.backbutton}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../../assets/BackImage.png')} style={{ height: 72, width: 72, }}></Image></TouchableOpacity>
            </View>

            <View style={styles.forgotTextCon}>
                <Text style={styles.forgetText}>OTP Verification</Text>
                <View style={styles.break} />
                <Text style={styles.forgetTextnormal}>Enter the verification code we just sent on your email address.</Text>
            </View>

            <View style={styles.break} />

            <View style={styles.break} />

            <TextInput
                style={styles.input}
                placeholder="Ender Your Code"
                placeholderTextColor="#000"
                value={code}
                onChangeText={(text) => setCode(text)}
                keyboardType="number-pad"
            />

            <View style={styles.break} />
            <View style={styles.break} />
            <View style={styles.buttonelement}>
                <TouchableOpacity style={styles.logbutton} onPress={ codeVerification}><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Verify</Text></TouchableOpacity>
            </View>

            <View style={styles.break} />

            <View style={styles.break} />
            <View style={{width:'100%', alignItems:'center',  flex: 1,flexDirection: "row",justifyContent:'center'}}>
                <Text style={{ color: '#000' }}>Didn’t received code? </Text> 
                <TouchableOpacity><Text style={{ color: '#FF2626', }}> Resend</Text></TouchableOpacity>
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

        alignItems: "center",
        width: '100%',
        zIndex: 10,
        marginLeft: -10,
    },
})