import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardHospitalRequest from './DashboardHospitalRequest';
import DashboardLandingPage from './DashboardLandingPage';
import DashboradCampaign from './DashboradCampaign';
import DashboardRanking from './DashboardRanking';
import DashboardProfile from './DashboardProfile';
import IMAGEDASHBOARD from '../../assets/view-dashboard.png';





export default function Dashboard() {

  const Tab = createBottomTabNavigator();

  const navigation = useNavigation();
  const logout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

  }


  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="dashboardLandingPage" component={DashboardLandingPage} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/view-dashboard.png')} style={{  height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null, 
        }} />
        <Tab.Screen name="DashboardHospitalRequest" component={DashboardHospitalRequest} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/hospital-box.png')} style={{  height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null, 
        }} />
        <Tab.Screen name="DashboradCampaign" component={DashboradCampaign} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/bullhorn.png')} style={{  height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null, 
        }} />
        <Tab.Screen name="DashboardRanking " component={DashboardRanking} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/star-box.png')} style={{  height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null, 
        }} />
        <Tab.Screen name="DashboardProfile" component={DashboardProfile} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{backgroundColor:focused ? '#FF6565' : 'gray', height: focused ? 45 : 35, width: focused ? 45 : 35, alignItems:'center' ,justifyContent:'center' ,borderRadius:90, }}>
            <Image source={require('../../assets/sample-profile.jpg')} style={{  height: focused ? 40 : 30, width: focused ? 40 : 30, borderRadius:90}}></Image>
            </View> 
          ),
          tabBarLabel: () => null, 
        }} />
      </Tab.Navigator>




    </>

  )
}

const styles = StyleSheet.create({})