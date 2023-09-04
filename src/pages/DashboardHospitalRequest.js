import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DashboardStructure from '../components/DashboardStructure';
import SelectDropdown from 'react-native-select-dropdown';
import BloodBankRequest from '../components/BloodBankRequest';




function Children2() {
  return (
    <>
      <View style={{margin:40, marginBottom:5,}}>
        <Text style={{color:'black'}}>
          Blood Bank Request
        </Text>
      </View>
      <ScrollView>
      <View style={styles.childrenconReq}>
       
        <BloodBankRequest status={"Normal"} BloodType='B+' BloodQuntity='300ml' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"Emergency"} BloodType='B+' BloodQuntity='150ml' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"Urgent"} BloodType='B+' BloodQuntity='200ml' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"completed"} BloodType='B+' BloodQuntity='600ml' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"Normal"} BloodType='B+' BloodQuntity='700ml' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"Emergency"} BloodType='B+' BloodQuntity='500ml' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"Urgent"} BloodType='B+' BloodQuntity='2L' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        <BloodBankRequest status={"completed"} BloodType='B+' BloodQuntity='2L' RequestID='B001' RequestDate='2023-02-02' RequestHospital='Kalmunai Base Hospital'></BloodBankRequest>
        
      </View>
      </ScrollView>
    </>
  )
}
function Children1() {
  return (
    <View style={{ margin: 30, }}>
      <SelectDropdown
        data={["All","My", "Normal", "Emergency", "completed", "Urgent"]}
        buttonStyle={{ borderRadius: 10, width: '40%', height: 40 }}
        defaultButtonText={["Status"]}
        buttonTextStyle={{ fontSize: 14, }}
      />
    </View>
  )
}


export default function DashboardHospitalRequest() {
  return (
    <>
      <DashboardStructure children1={<Children1 />} children2={<Children2 />}></DashboardStructure>
    </>
  )
}

const styles = StyleSheet.create({

  childrenconReq: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
})