import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import LoginStructure from '../components/LoginStructure'
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField';
import { useSelector, useDispatch } from 'react-redux';
import { setBloodBank, setDOB, setDistrict, setDivition, setEmail, setEmailCode, setNIC, setName, setPassword, setPhoneNumber, setConfirmPassword } from '../Redux/Action/RegisterAction'
import { emptyValueValidate, tostMessage } from '../services/Validations';
import addDonor from '../services/addDonor';







export default function ForgotPassword2() {

    const { name, emailCode, phoneNumber, dob, district, divition, nic, email, password, bloodbank, confirmPassword } = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();

    const [seconds, setSeconds] = useState(60);

    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const ForgotPassword4 = () => {
        navigation.navigate('ForgotPassword4')

    }


    const codeVerification = async () => {

        if (emptyValueValidate(emailCode)) {

            console.log(emailCode);
            if (code == emailCode) {
                try {
                    const data = await addDonor(name, dob, nic, phoneNumber, district, divition, email, password, bloodbank);
                    if (data.message === true) {
                        ForgotPassword4();
                    } else {
                        tostMessage(data.message);
                    }
                } catch (error) {
                    console.error('Error fetching verification code:', error);
                }
            } else {
                tostMessage('You Entered Wrong Verification Code!!');
            }
        } else {
            tostMessage('Time Expired, Try Again!');
        }


    };


    useEffect(() => {
        if (seconds > 0) {
            const timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            dispatch(setEmailCode(""));
        }
    }, [seconds]);

    return (
        <LoginStructure>
            <View style={styles.backbutton}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../../assets/BackImage.png')} style={{ height: 72, width: 72, }}></Image></TouchableOpacity>
            </View>

            <View style={{ padding: 25 }}>
                <Text style={styles.forgetText}>OTP Verification</Text>
                <View style={styles.break} />
                <Text style={styles.forgetTextnormal}>Enter the verification code we just sent on your email address.</Text>
            </View>



            <InputField
                onChangeText={(text) => setCode(text)}
                placeholder={"Enter Your Code"}
                inputMode={"numeric"}
                url={"https://img.icons8.com/ios-glyphs/30/video-id-verification.png"}

            >

            </InputField>

            <View style={styles.break} />

            <View style={styles.buttonelement}>
                <TouchableOpacity style={styles.logbutton} onPress={codeVerification}><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Verify</Text></TouchableOpacity>
            </View>


            <View style={styles.break} />
            <View style={styles.break} />
            <View style={{ width: '100%', alignItems: 'center', flex: 1, flexDirection: "row", justifyContent: 'center' }}>
                {seconds == 0 ? (
                    <View style={{ width: '100%', alignItems: 'center', flex: 1, flexDirection: "row", justifyContent: 'center' }}>
                        <Text style={{ color: '#000' }}>Didn’t receive code? </Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#FF2626' }}> Resend</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <Text style={{ color: '#000' }}>{`Time Remaining: ${seconds} seconds`}</Text>
                )}

            </View>




        </LoginStructure>
    )
}

const styles = StyleSheet.create({

    backbutton: {
        marginTop: -45,

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
        paddingRight: 25
    },
})