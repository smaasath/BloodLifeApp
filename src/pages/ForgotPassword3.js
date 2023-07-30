import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import LoginStructure from '../components/LoginStructure'
import { useNavigation } from '@react-navigation/native';
import InputTextCon from '../components/inputTextCon';




export default function ForgotPassword3() {


    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const navigation = useNavigation();

    const navForgotPass4 = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'ForgotPassword4' }],
          });

    }

    const handleNewPasswordChange = (text) => {
        setNewPassword(text);
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
    };

    const changePassword = () => {
        if (confirmPassword !== '' && passwordsMatch) {

            navForgotPass4()
        }else{
            Alert.alert('You Entered Wrong Verification Code!!');
        }
    }

    const passwordsMatch = newPassword === confirmPassword;



    return (
        <LoginStructure>
            <View style={styles.backbutton}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../../assets/BackImage.png')} style={{ height: 72, width: 72, }}></Image></TouchableOpacity>
            </View>

            <View style={styles.forgotTextCon}>
                <Text style={styles.forgetText}>Create new password</Text>
                <View style={styles.break} />
                <Text style={styles.forgetTextnormal}>Your new password must be unique from those previously used.</Text>
            </View>

            <View style={styles.break} />

            <View style={styles.break} />

            <InputTextCon
                onChangeText={handleNewPasswordChange}
                placeholder="New Password"
                value={newPassword}
                password={true}

            />

            <View style={styles.break} />
            <InputTextCon
                onChangeText={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                value={confirmPassword}
                password={true}

            />
            {confirmPassword !== '' && !passwordsMatch && (
                <Text style={{ color: 'red' }}>Passwords do not match.</Text>
            )}

            {confirmPassword !== '' && passwordsMatch && (
                <Text style={{ color: 'green' }}>Passwords match!</Text>
            )}
            <View style={styles.break} />
            <View style={styles.break} />
            <View style={styles.buttonelement}>
                <TouchableOpacity style={styles.logbutton} onPress={changePassword}><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Change Password</Text></TouchableOpacity>
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
        width: 180,
        height: 45,
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