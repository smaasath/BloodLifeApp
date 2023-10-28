import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import LoginStructure from '../components/LoginStructure'
import InputConPassword from '../components/InputConPassword'
import InputTextCon from '../components/inputTextCon'
import DatePicker from 'react-native-date-picker'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';


export default function DonorRegister() {

  const [name, setName] = useState('');
  const minimumDate = new Date();
  minimumDate.setFullYear(minimumDate.getFullYear() - 18);
  const [date, setDate] = useState(minimumDate);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = React.useState("");
  const navigation = useNavigation();

  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ]

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const valitation = () => {

    
  }

  const navTologin = () => {
    navigation.navigate("Login");
    console.log("ko");
  };


  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <LoginStructure>

        <View style={styles.firstcontainer}>
          <Text style={styles.forgetText}>Create Account</Text>
        </View>

        <View style={styles.firstcontainer}>
          <InputTextCon
            onChangeText={(text) => setName(text)}
            label={"Name"}
            value={name}
            url={"https://img.icons8.com/ios-glyphs/30/user--v1.png"}
          />
        </View>

        <View style={{ ...styles.firstcontainer, flexDirection: "row" }}>
          <View style={{ ...styles.secondcontainer, marginRight: 5, flex: 5 }}>
            <InputTextCon
              onChangeText={(text) => setName(text)}
              label={"Phone Number"}
              value={name}
              maxLength={10}
              inputMode={"numeric"}
              url={"https://img.icons8.com/ios-glyphs/30/phone--v1.png"}
            />
          </View>
          <View style={{ ...styles.secondcontainer, flex: 3, marginLeft: 5, alignItems: "center", justifyContent: "center", borderWidth: 1, borderRadius: 5, marginTop: 7 }}>

            <TouchableOpacity onPress={() => setOpen(true)}>

              <Text style={{ color: "black" }}>DOB</Text>

            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              mode='date'
              date={date}
              maximumDate={minimumDate}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
          </View>

        </View>


        <View style={{ ...styles.firstcontainer, flexDirection: "row" }}>
          <View style={{ ...styles.secondcontainer, paddingRight: 10 }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              dropdownTextStyles={{ color: "black" }}
              placeholder='Select District'
              inputStyles={{ color: "black" }}

            />
          </View>

          <View style={{ ...styles.secondcontainer, paddingLeft: 10 }}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              dropdownTextStyles={{ color: "black" }}
              sty
              inputStyles={{ color: "black" }}
              placeholder='Select Divistion'

            />
          </View>


        </View>

        <View style={styles.firstcontainer}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            dropdownTextStyles={{ color: "black" }}
            sty
            inputStyles={{ color: "black" }}
            placeholder='Select Blood Bank'

          />

        </View>

        <View style={styles.firstcontainer}>
          <InputTextCon
            onChangeText={(text) => setName(text)}
            label={"NIC"}
            value={name}
            url={"https://img.icons8.com/ios-filled/50/security-pass.png"}
            maxLength={12}
          />

        </View>

        <View style={styles.firstcontainer}>
          <InputTextCon
            onChangeText={(text) => setName(text)}
            label={"Email"}
            value={name}
            url={"https://img.icons8.com/ios-filled/50/gmail.png"}
            inputMode={"email"}
          />

        </View>

        <View style={styles.firstcontainer}>
          <InputConPassword
            onChangeText={(text) => setName(text)}
            label={"Password"}
            value={name}
          />

        </View>

        <View style={styles.firstcontainer}>
        <InputConPassword
            onChangeText={(text) => setName(text)}
            label={"Confirm Password"}
            value={name}
          />

        </View>
        <View style={styles.buttonelement}>
          <TouchableOpacity onPress={valitation} style={styles.logbutton} ><Text style={{ color: '#fff', fontSize: 14, fontWeight: 500, }}>Register</Text></TouchableOpacity>
        </View>


        <View style={{ width: '100%', flexDirection: 'row',marginTop:50,marginBottom:50 }}>
          <View style={{ flex: 1, alignItems: "center",justifyContent:"center"}}>
            <Text style={{ color: 'black', textAlign: 'right', fontSize: 15 }}>Already have an Account?  <Text onPress={navTologin} style={{ color: 'green', textAlign: 'right', }}>Login</Text></Text>
          </View>
        </View>


      </LoginStructure>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  firstcontainer: {
    width: "100%",
    padding: 20,
    paddingBottom: 15,
    paddingTop: 10,
  },
  secondcontainer: {
    flex: 1,
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
    padding:20,
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
