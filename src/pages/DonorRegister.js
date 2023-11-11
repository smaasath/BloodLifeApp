import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import LoginStructure from '../components/LoginStructure'
import DatePicker from 'react-native-date-picker'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';
import InputField from '../components/InputField'
import { useSelector, useDispatch } from 'react-redux';
import { setBloodBank, setDOB, setDistrict, setDivition, setEmail, setEmailCode, setNIC, setName, setPassword, setPhoneNumber, setConfirmPassword } from '../Redux/Action/RegisterAction'
import fetchLocation from '../services/fetchLocation'
import fetchBloodBank from '../services/fetchBloodBank'
import { validateSriLankanNIC, emptyValueValidate, ValidateEmail, ValidateContactNumber, ValidatePassword, ValidateConfirmPassword, tostMessage } from '../services/Validations'
import VerificationCode from '../services/VerificationCode'






export default function DonorRegister() {

  const { name, emailCode, phoneNumber, dob, district, divition, nic, email, password, bloodbank, confirmPassword } = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [LocationArray, setLocationArray] = useState([]);
  const [DistictArray, setDistictArray] = useState([]);
  const [DivitionArray, setDivitionArray] = useState([]);
  const [BloodBankArray, setBloodBankArray] = useState([]);
  const [loader, setLoader] = React.useState(true);


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

  }, []);

  useEffect(() => {

    if (LocationArray.length === 0) {
      setLoader(true);
    } else {
      const districtArray = [...new Set(LocationArray.map(item => item.district))].map(district => ({ value: district }));
      setDistictArray(districtArray);

    }

  }, [LocationArray]);

  useEffect(() => {


    const fetchBloodBankData = async () => {
      try {
        const bloodBankData = await fetchBloodBank(district);

        if (bloodBankData.length === 0) {
          setLoader(true);
        } else {
          setBloodBankArray(bloodBankData);
        }
      } catch (error) {
        console.error('fetching blood bank data:', error);

      }
    };


    fetchBloodBankData();

  }, [district, divition]);


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



  const validation = () => {
    let status = '';

    const isAllFieldsFilled =
      emptyValueValidate(name) &&
      emptyValueValidate(phoneNumber) &&
      emptyValueValidate(dob) &&
      emptyValueValidate(district) &&
      emptyValueValidate(divition) &&
      emptyValueValidate(nic) &&
      emptyValueValidate(email) &&
      emptyValueValidate(password) &&
      emptyValueValidate(confirmPassword) &&
      emptyValueValidate(bloodbank);

    if (isAllFieldsFilled) {
      if (
        ValidateEmail(email) &&
        ValidateContactNumber(phoneNumber) &&
        ValidatePassword(password) &&
        ValidateConfirmPassword(password, confirmPassword) &&
        validateSriLankanNIC(nic)
      ) {
verifyGmail();

      } else {
        status =
          !ValidateEmail(email)
            ? 'Invalid Email'
            : !ValidateContactNumber(phoneNumber)
              ? 'Invalid Contact Number'
              : !ValidatePassword(password)
                ? 'Password must contain 6 Letters eg: Adt$3!@#'
                : !ValidateConfirmPassword(password, confirmPassword)
                  ? 'Passwords do not match'
                  : !validateSriLankanNIC(nic)
                    ? 'NIC not Valid'
                    : 'Invalid';
      }
    } else {
      status = 'All Fields Need to Fill';
    }

    if (status) {
      tostMessage(status);
    }
  };

  const navTologin = () => {
    navigation.navigate("Login");

  };

  const verifyGmail = async () => {
    try {
      const data = await VerificationCode(email);

      if (data.message === true) {
        dispatch(setEmailCode(data.otp));
        navToVerifyCode();
      } else {
        tostMessage(data.message);
      }
    } catch (error) {
      console.error('Error fetching verification code:', error);
    }
  };


  const navToVerifyCode= () => {
    navigation.navigate('ForgotPassword2')

  };


  return (
    <>



      <ScrollView style={{ backgroundColor: "white" }}>
        <LoginStructure>

          {/* Heading Start */}
          <View style={styles.firstcontainer}>
            <Text style={styles.forgetText}>Create Account</Text>
          </View>
          {/* Heading end */}

          {/* name input */}
          <InputField
            placeholder={"Name"}
            onChangeText={(text) => dispatch(setName(text))}
            url={"https://img.icons8.com/ios-glyphs/30/user--v1.png"}
            inputMode={"text"}

          ></InputField>
          {/* name input */}


          {/*second container start */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 5 }}>
              {/*phone Number Input */}

              <InputField
                placeholder={"Phone Number"}
                onChangeText={(number) => dispatch(setPhoneNumber(number))}
                url={"https://img.icons8.com/ios-glyphs/30/phone--v1.png"}
                inputMode={"numeric"}
                maxLength={10}
              ></InputField>

            </View>

            <View style={{ ...styles.secondcontainer, flex: 3, }}>

              {/*Date Input */}
              <TouchableOpacity onPress={() => setOpen(true)}>
                <View style={{ width: 110, height: 40, alignItems: "center", justifyContent: "center" }}>
                  <Text style={{ color: "black" }}>{dob != "" ? dob.toLocaleDateString('en-US', "yyyy-mm-dd") : "dob"}</Text>
                </View>
              </TouchableOpacity>

              {/*Date Picker */}
              <DatePicker
                modal
                open={open}
                mode='date'
                date={dob}
                maximumDate={dob}
                onConfirm={(date) => {
                  setOpen(false)
                  setDOB(date)
                  console.log(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
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


          {/*Blood Bank*/}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, margin: 25, marginTop: 0 }}>
              <SelectList
                setSelected={(val) => dispatch(setBloodBank(val))}
                data={BloodBankArray == [] ? { "value": "not found" } : [...new Set(BloodBankArray.map(item => item.bloodBankName))].map(bloodBankName => ({ value: bloodBankName }))}
                save="value"
                dropdownTextStyles={{ color: "black" }}
                inputStyles={{ color: "black", width: "95%" }}
                placeholder='Select Blood Bank'
              />
            </View>
          </View>


          {/*Nic Input*/}
          <InputField
            onChangeText={(text) => dispatch(setNIC(text))}
            placeholder={"NIC"}
            inputMode={"text"}
            url={"https://img.icons8.com/ios-filled/50/security-pass.png"}
            maxLength={12}
          ></InputField>


          {/*Email Input*/}
          <InputField
            onChangeText={(text) => dispatch(setEmail(text))}
            placeholder={"Email"}
            url={"https://img.icons8.com/ios-filled/50/gmail.png"}
            inputMode={"email"}
          ></InputField>


          {/*Password Input*/}
          <InputField
            onChangeText={(text) => dispatch(setPassword(text))}
            placeholder={"Password"}
            url={"https://img.icons8.com/ios-glyphs/30/password.png"}
            inputMode={"text"}
            secureTextEntry={true}
          ></InputField>

          {/*Confirm password Input*/}
          <InputField
            onChangeText={(text) => dispatch(setConfirmPassword(text))}
            placeholder={"Confirm Password"}
            url={"https://img.icons8.com/ios-glyphs/30/password.png"}
            inputMode={"text"}
            secureTextEntry={true}
          ></InputField>


          <View style={styles.buttonelement}>
            <TouchableOpacity onPress={validation} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Register</Text></TouchableOpacity>
          </View>


          <View style={{ width: '100%', flexDirection: 'row', marginTop: 50, marginBottom: 50 }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: 'black', textAlign: 'right', fontSize: 15 }}>Already have an Account?  <Text onPress={navTologin} style={{ color: 'green', textAlign: 'right', }}>Login</Text></Text>
            </View>
          </View>


        </LoginStructure>
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
