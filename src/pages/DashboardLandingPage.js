import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DashboardStructure from '../components/DashboardStructure';
import BloodBankRequest from '../components/BloodBankRequest';





function subtractLocalDateFromEnteredDate(enteredDateString) {
    // Convert the entered date string to a Date object
    const enteredDate = new Date(enteredDateString);

    // Get the current local date
    const now = new Date();
    const localYear = now.getFullYear();
    const localMonth = now.getMonth() + 1; // Months are zero-based, so add 1
    const localDay = now.getDate();

    // Create a Date object for the local date
    const localDate = new Date(localYear, localMonth - 1, localDay); // Months are zero-based, so subtract 1 from the month

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = enteredDate - localDate + 1.051e+10;

    // Convert milliseconds to days
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    return Math.round(differenceInDays);
}


function checkNumberSign(number) {
    if (number > 0) {
        return true; // Positive
    } else if (number < 0) {
        return false; // Negative
    } else {
        return false; // Zero
    }
}

function Children1({ date }) {
    return (
        <>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.timecon}>
                    <View style={styles.timeConLeft}>
                        {checkNumberSign(subtractLocalDateFromEnteredDate(date))
                            ?
                            <Text style={{ ...styles.daycount, color: '#E91114' }}>{subtractLocalDateFromEnteredDate(date)}<Text style={{ color: 'black', fontSize: 15, }}>   Days Remaining</Text></Text>
                            :
                            <Text style={{ ...styles.daycount, color: 'green' }}>{Math.abs(subtractLocalDateFromEnteredDate(date))}<Text style={{ color: 'black', fontSize: 12, }}> Days Passed Without Donation</Text></Text>
                        }
                        <View style={styles.break}></View><View style={styles.break}></View>
                        <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>Your Last Donation Date</Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', }}>{date}</Text>

                    </View>
                    <View style={styles.timeConRight}>
                        <Image source={require('../../assets/clockimage.png')} style={{ height: 130, width: 130, }}></Image>
                    </View>
                </View>
            </View>
        </>
    )
}

function Children2() {
    const navigation = useNavigation();

    const navToRequest = () => {
        navigation.navigate("DashboardHospitalRequest");
    };
    return (
        <>
            <View style={styles.children2Con}>
                <View style={{ flexDirection: 'row', padding: 10, paddingRight: 30, paddingLeft: 30, }}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ color: 'black', }}>Request</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', }}>
                        <TouchableOpacity onPress={navToRequest}><Text style={{ color: 'blue', }}>View More</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.childrenconReq}>
                    <BloodBankRequest status={"Normal"} BloodType='B+' BloodQuntity='2L' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
                    <BloodBankRequest status={"Emergency"}  BloodType='B+' BloodQuntity='2L' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
                    <BloodBankRequest status={"Urgent"}  BloodType='B+' BloodQuntity='2L' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
                    <BloodBankRequest status={"completed"}  BloodType='B+' BloodQuntity='2L' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
                </View>


            </View>
        </>
    )
}


export default function DashboardLandingPage() {





    return (
        <>
            <DashboardStructure children1={<Children1 date={"2023-03-23"} />} children2={<Children2 />}></DashboardStructure>
        </>
    )
}

const styles = StyleSheet.create({

    tex: {
        color: '#000',
        fontSize: 100,
    },

    timecon: {
        width: '85%',
        height: 150,
        margin: 25,
        backgroundColor: "#F4F6F7",
        padding: 10,
        zIndex: 1,
        marginBottom: -70,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        flexDirection: 'row',

    },

    children2Con: {
        marginTop: 110,
    },

    childrenconReq: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    timeConRight: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeConLeft: {
        flex: 3,
    },

    daycount: {
        fontSize: 50,
        fontWeight: 'bold',
    },

    break: {
        height: 10,
    },

    textcon: {

    },

})
