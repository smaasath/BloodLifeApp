import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RequestModel from '../components/RequestModel'



export default function Certificate() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <><View>
      <Text>Certificate</Text>
    </View>  
    <RequestModel isModalVisible={isModalVisible} toggleModal={toggleModal}>

  </RequestModel>
    
    <TouchableOpacity
    
    onPress={toggleModal}
    
    ><Text style={{color:'red', fontSize:20, padding:30}}>click</Text></TouchableOpacity>
    
    </>
  )
}

const styles = StyleSheet.create({})