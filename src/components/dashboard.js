import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {


  const navigation = useNavigation();
  const logout = () =>{
    navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    
  }


  return (
    <View>
      <TouchableOpacity onPress={logout}><Text style={{ color: '#3498DB', textAlign: 'right', }}>logout</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})