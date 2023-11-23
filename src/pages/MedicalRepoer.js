
import RequestModel from '../components/RequestModel'
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import LoginStructure from '../components/LoginStructure'
import DatePicker from 'react-native-date-picker'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField'
import { useSelector, useDispatch } from 'react-redux';
import { setBloodBank, setDOB, setDistrict, setDivition, setAvailability, setEmailCode, setNIC, setName, setPassword, setPhoneNumber, setConfirmPassword } from '../Redux/Action/RegisterAction'
import fetchLocation from '../services/fetchLocation'
import fetchBloodBank from '../services/fetchBloodBank'
import { validateSriLankanNIC, emptyValueValidate, ValidateEmail, ValidateContactNumber, ValidatePassword, ValidateConfirmPassword, tostMessage } from '../services/Validations'
import EditDonor from '../services/EditDonor'




export default function MedicalRepoer() {


    const { UserArray, Token } = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();

    const navigation = useNavigation();


















    const navTodashorsd = () => {
        navigation.navigate('Dashboard')

    };







    return (
        <>



            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={
                            UserArray.medicalReport
                                ? { uri: `data:image/jpeg;base64,${UserArray.medicalReport}` }
                                : require('../../assets/testuser.png')
                        }
                        style={{
                            height: 600,
                            width: 350,

                        }}
                    />
                </View>

                <View style={styles.buttonelement}>
                    <TouchableOpacity onPress={navTodashorsd} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Back</Text></TouchableOpacity>
                </View>






            </ScrollView>

        </>
    )
}


const styles = StyleSheet.create({
    firstcontainer: {
        width: "100%",
        padding: 10,
        paddingBottom: 15,
        paddingTop: 10,
    },
    secondcontainer: {
        margin: 10,
        marginLeft: 0,
        marginRight: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    forgetText: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonelement: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: '100%',
        padding: 20,
        zIndex: 10,
        marginTop:30
    },
    logbutton: {
        backgroundColor: '#BD1616',
        width: "30%",
        height: 38,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",

    },
})