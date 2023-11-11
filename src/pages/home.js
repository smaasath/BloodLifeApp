import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import retrieveUserSession from '../services/getToken';
import { useSelector, useDispatch } from 'react-redux';
import { setUserToken } from '../Redux/Action/RegisterAction';




export default function Home() {

  
  const dispatch = useDispatch();

  const navigation = useNavigation();


  const navToLogin = () => {
    navigation.navigate('Login');
  };

  const navToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  useEffect(() => {

    async function getToken(){
      try {
        const Token = await retrieveUserSession();
        if (Token !== undefined) {
          dispatch(setUserToken(Token));
          navToDashboard();
        } else {
         
        }
    } catch (error) {
        console.error('Error fetching verification code:', error);
    }
    }

    getToken();
  }, []);

  return (
    <View style={styles.container}>
    <View style={styles.circle}></View>
    <View style={styles.imagewel}>
   <Image source={require('../../assets/welcomeimage.png')} style={{height:300, width:300,}}></Image>
    </View>
    <View style={styles.weltextcon}>
    <Text style={styles.weltext}>Welcome</Text>
    <Text style={styles.weltextbottom}>Jon with us & Donate</Text>
    </View>

   
    <TouchableOpacity onPress={navToLogin} style={styles.welbutton} ><Text style={styles.welbuttontext}>Get Stared</Text></TouchableOpacity>
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center',
    
  },

  circle: {
    width:550,
    height: 421,
    borderRadius:500,
    backgroundColor: '#BD1616',
    marginTop:-400,
  },

  imagewel:{
    padding:50,
    
  },
  weltext:{
    
    fontSize:48,
    color: '#000',
   

  },

  weltextbottom:{
    
    fontSize:18,
    justifyContent:'center',
    alignItems:'center',
    color: '#000',
    
  },

  welbutton:{
    width:243,
    height:58,
    borderRadius:30,
    backgroundColor:'#BD1616',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
  },

  welbuttontext:{
    fontSize:26,
    color:'white',
    
  },

  weltextcon:{
    justifyContent:'center',
    alignItems:'center',
  },
});