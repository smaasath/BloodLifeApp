import * as React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Home() {

  const navigation = useNavigation();

  const onpresslogin = () =>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
    <View style={styles.circle}></View>
    <View style={styles.imagewel}>
   <Image source={require('../../assets/welcomeimage.png')} style={{height:300, width:300,}}></Image>
    </View>
    <View style={styles.weltextcon}>
    <Text style={styles.weltext}>Welcome</Text>
    <Text style={styles.weltextbottom}>Join with us & Donate</Text>
    </View>

   
    <TouchableOpacity onPress={onpresslogin} style={styles.welbutton} ><Text style={styles.welbuttontext}>Get Stared</Text></TouchableOpacity>
  
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