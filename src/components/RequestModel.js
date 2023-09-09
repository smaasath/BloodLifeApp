import React, { useState } from "react";
import { Button, Text, View, StyleSheet,TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';

function RequestModel({ isModalVisible, toggleModal,status, BloodQuntity, RequestID, RequestDate, RequestHospital,location,bloodBankName,bloodGroup }) {
  const navigation = useNavigation();
  const navToQrMain = () => {
    navigation.navigate("QrMain");
};

  return (
    <>


      <Modal isVisible={isModalVisible}
        style={{ margin: 0, justifyContent: 'flex-end' }}
      >

        <View style={styles.bigCon}>
          <View style={{ alignItems: 'center', padding: 10 }}><Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Request Details</Text></View>
          <View style={{...styles.rowCon, marginBottom:20, marginTop:25}}>

            <View style={{ ...styles.colConHead, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={styles.fisrtText}>{bloodGroup}</Text>
            </View>

            <View style={{ ...styles.colConContent, alignItems: 'flex-end', justifyContent: 'center' }}>
              <Text style={{ ...styles.fisrtText, color: '#FF6565' }}>{BloodQuntity}</Text>
            </View>

          </View>
          <View style={{paddingLeft:15}}>
          <View style={styles.rowCon}>

            <View style={{ ...styles.colConHead}}>
              <Text style={{...styles.contentTextHead}}>Request ID</Text>
            </View>

            <View style={{ ...styles.colConContent}}>
              <Text style={{ ...styles.conText}}>{RequestID}</Text>
            </View>

          </View>


          <View style={styles.rowCon}>

            <View style={{ ...styles.colConHead}}>
              <Text style={{...styles.contentTextHead}}>Blood Bank</Text>
            </View>

            <View style={{ ...styles.colConContent}}>
              <Text style={{ ...styles.conText}}>{bloodBankName}</Text>
            </View>

          </View>


          <View style={styles.rowCon}>

            <View style={{ ...styles.colConHead}}>
              <Text style={{...styles.contentTextHead}}>Hospital</Text>
            </View>

            <View style={{ ...styles.colConContent}}>
              <Text style={{ ...styles.conText}}>{RequestHospital}</Text>
            </View>

          </View>


          <View style={styles.rowCon}>

            <View style={{ ...styles.colConHead}}>
              <Text style={{...styles.contentTextHead}}>Location</Text>
            </View>

            <View style={{ ...styles.colConContent}}>
              <Text style={{ ...styles.conText}}>{location}</Text>
            </View>

          </View>


          <View style={styles.rowCon}>

            <View style={{ ...styles.colConHead}}>
              <Text style={{...styles.contentTextHead}}>Date Requested</Text>
            </View>

            <View style={{ ...styles.colConContent}}>
              <Text style={{ ...styles.conText}}>{RequestDate}</Text>
            </View>

          </View>


          <View style={styles.rowCon}>

            <View style={{ ...styles.colConHead}}>
              <Text style={{...styles.contentTextHead}}>Request Status</Text>
            </View>

            <View style={{ ...styles.colConContent}}>
              <Text style={{ ...styles.conText}}>{status}</Text>
            </View>

          </View>
          </View>


   

     


          <View style={{...styles.rowCon, height:100}}>

            <View style={{ ...styles.colConHead, alignItems: 'flex-start', justifyContent: 'center' }}>
              <TouchableOpacity
              onPress={toggleModal}
              >
              <View style={{backgroundColor:'gray', width:140, height:50, borderRadius:15, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...styles.contentTextHead, color:'white'}}>Cancel</Text>
              </View>
              </TouchableOpacity>
            </View>

            <View style={{ ...styles.colConContent, alignItems: 'flex-end', justifyContent: 'center' }}>
              <TouchableOpacity
              onPress={navToQrMain}
              >
              <View style={{backgroundColor:'#FF6565', width:140, height:50,borderRadius:15,alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{...styles.contentTextHead}}>Accept</Text>
              </View>
              </TouchableOpacity>
            </View>

          </View>


        </View>

      </Modal>
    </>
  );
}


const styles = StyleSheet.create({
  bigCon: {
    backgroundColor: 'white',
    paddingTop: 20,
    padding: 20,
    height: 500,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },

  rowCon: {
    flexDirection: "row",
    height: 40
  },

  colConHead: {
    flex: 2,
  },

  colConContent: {
    flex: 3,
    backgroundColor: 'white'
  },

  fisrtText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft:15
  },

  contentTextHead:{
    color:'black', 
    fontWeight:'bold', 
    fontSize:15,
  },

  conText:{
    color:'gray', 
    fontWeight:'bold', 
  },


})
export default RequestModel;