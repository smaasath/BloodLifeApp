import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DashboardStructure from '../components/DashboardStructure';
import RankingComponent from '../components/RankingComponent';




function Children1() {
  return (
    <>
    <View style={{flexDirection:'row',alignItems:'center',justifyConten:'center'}}>
    <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
    <Image source={require('../../assets/coin.png')} style={{ height: 100, width: 100, borderRadius: 90 }}></Image>
    </View>
    <View style={{flex:1}}>
    <Text style={{fontSize:30, fontWeight:'bold', color:'#FFD148'}}>10000</Text>
    </View>
    </View>
      <View style={{zIndex: 1,marginBottom:-80, alignItems:'center',justifyContent:'center'}}>
         <RankingComponent name='Mohamed Aasath' noOfDonation='20' coinValue='100'></RankingComponent>
     
      </View>
    </>
  )
}

function Children2() {

  return (
    <>
    <View style={{marginTop:100,}}></View>
    <View style={{padding:20,}}><Text style={{color:'black'}}>Ranking</Text></View>
   
      <RankingComponent name='Kajanan' noOfDonation='10' coinValue='1'></RankingComponent>
      <RankingComponent name='Saalujan' noOfDonation='20' coinValue='2'></RankingComponent>
      <RankingComponent name='Powsi' noOfDonation='30' coinValue='3'></RankingComponent>
      <RankingComponent name='Hasan' noOfDonation='40' coinValue='4'></RankingComponent>
    </>
  )
}

export default function DashboardRanking() {
  return (
    <DashboardStructure children1={<Children1 />} children2={<Children2 />}></DashboardStructure>
  )
}

const styles = StyleSheet.create({
  smText: {
    color: '#8391A1',
  }
})