
import RequestModel from '../components/RequestModel'
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
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




export default function EditProfile() {


    const { name, phoneNumber, dob, district, divition, nic, email, UserArray, availability,Token } = useSelector(state => state.RegisterReducer);
    const dispatch = useDispatch();

 
    const [DonorName, setDonorName] = useState(UserArray.name);
    const [DonorNumber, setDonorNumber] = useState(UserArray.contactNumber);
    const [DonorNic, setDonorNic] = useState(UserArray.nic);
    const [LocationArray, setLocationArray] = useState([]);
    const [DistictArray, setDistictArray] = useState([]);
    const [DivitionArray, setDivitionArray] = useState([]);
    const [BloodBankArray, setBloodBankArray] = useState([]);
    const [loader, setLoader] = React.useState(true);
    const AvailableArray = [{ "value": "Available" }, { "value": "NotAvailable" }]


    const minimumDate = new Date();
    minimumDate.setFullYear(minimumDate.getFullYear() - 18);
    const navigation = useNavigation();


    useEffect(() => {

        const fetchLocationData = async () => {
            try {
                const data = await fetchLocation();

                if (data.length === 0) {
                    setLoader(true);
                } else {
                    setLocationArray(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        };

        fetchLocationData();
        console.log(name)
    }, []);

    useEffect(() => {

        if (LocationArray.length === 0) {
            setLoader(true);
        } else {
            const districtArray = [...new Set(LocationArray.map(item => item.district))].map(district => ({ value: district }));
            setDistictArray(districtArray);
            console.log(districtArray)

        }

    }, [LocationArray]);



    useEffect(() => {

        function divition() {

            if (LocationArray.length === 0) {
                setLoader(true);
            } else {
                dispatch(setDivition(""));
                setBloodBankArray([]);
                const divitionArray = LocationArray.filter((item) => item.district === district).map(item => item.division).map(division => ({ value: division }));
                setDivitionArray(divitionArray);

            }
        }

        divition();

    }, [district]);


    useEffect(() => {
        if (BloodBankArray == []) {
            console.log(BloodBankArray);
            setLoader(true);
        } else {
            console.log(BloodBankArray);
            const bloodbanks = [...new Set(BloodBankArray.map(item => item.bloodBankName))].map(bloodBankName => ({ value: bloodBankName }));
            setBloodBankArray(bloodbanks);
            console.log(bloodbanks);
        }
    }, [divition]);





    const navToprofile = () => {
        navigation.navigate('Dashboard')

    };

    const EditDetail = async () => {
        try {
            const data = await EditDonor(DonorName,DonorNic, DonorNumber, district, divition, availability,Token);

            if (data.message === true) {

                navToprofile();
                
            } else {
                tostMessage(data.message);
            }
        } catch (error) {
            console.error('Error fetching verification code:', error);
        }
    };





    return (
        <>



            <ScrollView style={{ backgroundColor: "white" }}>

                {/* Heading Start */}
                <View style={styles.firstcontainer}>
                    <Text style={styles.forgetText}>Edit Account</Text>
                </View>
                {/* Heading end */}

                {/* name input */}
                <InputField

                    onChangeText={(text) => setDonorName(text)}
                    url={"https://img.icons8.com/ios-glyphs/30/user--v1.png"}
                    inputMode={"text"}
                    value={DonorName}

                ></InputField>
                {/* name input */}


                {/*second container start */}
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 5 }}>
                        {/*phone Number Input */}

                        <InputField
                            placeholder={"Phone Number"}
                            onChangeText={(number) => setDonorNumber(number)}
                            url={"https://img.icons8.com/ios-glyphs/30/phone--v1.png"}
                            inputMode={"numeric"}
                            maxLength={10}
                            value={DonorNumber}
                        ></InputField>

                    </View>



                </View>

                {/*second container end */}


                {/*third container star*/}
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, margin: 25 }}>

                        {/*District Input*/}
                        <SelectList
                            setSelected={(val) => dispatch(setDistrict(val))}
                            data={DistictArray}
                            save="value"
                            dropdownTextStyles={{ color: "black" }}
                            placeholder='Select District'
                            inputStyles={{ color: "black" }}
                        />
                    </View>

                    <View style={{ flex: 1, margin: 25 }}>

                        {/*Divition Input*/}
                        <SelectList
                            setSelected={(val) => dispatch(setDivition(val))}
                            data={DivitionArray}
                            save="value"
                            dropdownTextStyles={{ color: "black" }}
                            inputStyles={{ color: "black" }}
                            placeholder='Select Divistion'

                        />
                    </View>
                </View>
                {/*third container end*/}




                {/*Nic Input*/}
                <InputField
                    onChangeText={(text) => setDonorNic(text)}
                    placeholder={"NIC"}
                    inputMode={"text"}
                    url={"https://img.icons8.com/ios-filled/50/security-pass.png"}
                    maxLength={12}
                    value={DonorNic}
                ></InputField>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, margin: 25 }}>

                        {/*District Input*/}
                        <SelectList
                            setSelected={(val) => dispatch(setAvailability(val))}
                            data={AvailableArray}
                            save="value"
                            dropdownTextStyles={{ color: "black" }}
                            placeholder='Select Availability'
                            inputStyles={{ color: "black" }}
                        />
                    </View>

                </View>




                <View style={styles.buttonelement}>
                    <TouchableOpacity onPress={EditDetail} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Save</Text></TouchableOpacity>
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