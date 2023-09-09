import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardHospitalRequest from './DashboardHospitalRequest';
import DashboardLandingPage from './DashboardLandingPage';
import DashboradCampaign from './DashboradCampaign';
import DashboardRanking from './DashboardRanking';
import DashboardProfile from './DashboardProfile';
import IMAGEDASHBOARD from '../../assets/view-dashboard.png';
import EncryptedStorage from 'react-native-encrypted-storage';






export default function Dashboard() {

  const Tab = createBottomTabNavigator();
  const [donorId, setDonorId] = useState('');
  const [UserArray, setUserArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await retrieveUserSession();
      await fetchUser();
    
    }

    fetchData();
  }, [donorId]);



  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem("user_session");

      if (session !== undefined) {
        const parsedSession = JSON.parse(session);
        setDonorId(parsedSession.donorId);
       
      }
    } catch (error) {
      console.error("Error retrieving user session:", error);
    }
  }

  const fetchUser = async () => {


    var URL = "http://localhost:8081//bloodlife/Api/DonorApi.php";

    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    var Data = {
      donorId: donorId,

    };

    fetch(URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
      .then((response) => {
        if (!response.ok) {
         
        }
        return response.json();
      })
      .then((response) => {
        if (response.message == "Request Not Found") {

        } else {
          setUserArray(response);

        }



      })
      .catch((error) => {
        
      });
  };


  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="dashboardLandingPage" component={DashboardLandingPage} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/view-dashboard.png')} style={{ height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null,
        }} />
        <Tab.Screen name="DashboardHospitalRequest" component={DashboardHospitalRequest} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/hospital-box.png')} style={{ height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null,
        }} />
        <Tab.Screen name="DashboradCampaign" component={DashboradCampaign} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/bullhorn.png')} style={{ height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null,
        }} />
        <Tab.Screen name="DashboardRanking " component={DashboardRanking} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Image source={require('../../assets/star-box.png')} style={{ height: focused ? 40 : 30, width: focused ? 40 : 30, tintColor: focused ? '#FF6565' : 'gray', }}></Image>
          ),
          tabBarLabel: () => null,
        }} />
        <Tab.Screen name="DashboardProfile" component={DashboardProfile} options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ backgroundColor: focused ? '#FF6565' : 'gray', height: focused ? 45 : 35, width: focused ? 45 : 35, alignItems: 'center', justifyContent: 'center', borderRadius: 90, }}>
              <Image
  source={
    UserArray.image
      ? { uri: `data:image/jpeg;base64,${UserArray.image}` }
      : require('../../assets/testuser.png')
  }
  style={{
    height: focused ? 40 : 30,
    width: focused ? 40 : 30,
    borderRadius: 90,
  }}
/>
            </View>
          ),
          tabBarLabel: () => null,
        }} />
      </Tab.Navigator>




    </>

  )
}

const styles = StyleSheet.create({})