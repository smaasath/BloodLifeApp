
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginStructure from '../components/LoginStructure';
import InputTextCon from '../components/inputTextCon';






export default function ForgotPassword4() {



    const navigation = useNavigation();

    const navLogin = () => {
        navigation.navigate('Login')

    }




    return (


        <LoginStructure>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Image source={require('../../assets/Successmark.png')} style={{ height: 100, width: 100, }}></Image>
                <View style={styles.break} />
                <View style={styles.break} />
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={styles.forgetText}>Password Changed!</Text>
                    <View style={styles.break} />
                    <Text style={styles.forgetTextnormal}>Your password has been changed successfully.</Text>
                </View>
                <View style={styles.break} />
                <View style={styles.break} />
                <View style={styles.break} />
                
                <View style={styles.buttonelement}>
                <TouchableOpacity style={styles.logbutton} onPress={navLogin}><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Back to Login</Text></TouchableOpacity>
            </View>
            </View>



        </LoginStructure>








    );
}

const styles = StyleSheet.create({


    logbutton: {
        backgroundColor: '#BD1616',
        width: 180,
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",



    },


    break: {
        height: 20,
    },

    breakElement: {
        height: 30,
    },

    buttonelement: {

        alignItems: "center",
        width: '100%',
        zIndex: 10,
    },

    forgetTextnormal: {
        color: '#8391A1',
        fontSize: 16,


    },
    forgetText: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },

});