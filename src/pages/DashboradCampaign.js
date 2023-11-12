import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DashboardStructure from '../components/DashboardStructure';
import LoadPage from '../components/LoadPage';
import CampaignComponent from '../components/CampaignComponent';
import fetchCamp from '../services/fetchCampaign';
import { useSelector, useDispatch } from 'react-redux';
import { tostMessage } from '../services/Validations';
import { setCampaignArray } from '../Redux/Action/RegisterAction';
import { useNavigation } from '@react-navigation/native';
import fetchLocation from '../services/fetchLocation';





function Children2({Data}) {
  return (
    <>
      <View style={{margin:40, marginBottom:5,}}>
        <Text style={{color:'black'}}>
          Campaigns
        </Text>
      </View>
      <ScrollView>
    
      <View style={styles.childrenconCamp}>
        {Data?.length > 0 ? (
          Data.map((item, index) => (
            <CampaignComponent 
            key={index}
            Title={item.Title} 
            address={item.address} 
            status={item.status} 
            review={item.review || "Not Reviewed yet"} 
            startDate={item.startDate} 
            district={item.district} 
            endDate={item.endDate}
            ContactNo={item.ContactNo}
            campaignId={item.campaignId}
            
            >
     
            </CampaignComponent>
          ))
        ) : (
          <Text style={{color:'red'}}>No requests found</Text>
        )}
      </View>
      </ScrollView>
    </>
  )
}
function Children1({ setstatus,setdistrict,district}) {
  return (
    <View style={{ margin: 30, flexDirection:'row',}}>
      <View style={{flex:1,alignItems:'center'}}>
      <Text>Status</Text>
      <SelectDropdown
        data={["All", "Completed", "Active"]}
        buttonStyle={{ borderRadius: 10, width: '70%', height: 40,margin:10 }}
        defaultButtonText={["Status"]}
        buttonTextStyle={{ fontSize: 14, }}
        onSelect={(selectedItem) => setstatus(selectedItem)}
      />
      </View>

      <View style={{flex:1,alignItems:'center'}}>
       <Text>District</Text>
      <SelectDropdown
        data={district}
        buttonStyle={{ borderRadius: 10, width: '70%', height: 40,margin:10 }}
        defaultButtonText={["District"]}
        buttonTextStyle={{ fontSize: 14, }}
        onSelect={(selectedItem) => setdistrict(selectedItem)}
      />
      </View>



    </View>
  )
}


export default function DashboradCampaign() {
  
  const { Token,campaignArray} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(true);
  const [FilterreqArray, setFilterreqArray] = useState([]);
  const [status, setstatus] = useState("All");
  const [district, setdistrict] = useState("All");
  const [LocationArray, setLocationArray] = useState([]);
  const [DistictArray, setDistictArray] = useState([]);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    
    fetchData();
  
  }, [Token]);

  useEffect(() => {

    const fetchLocationData = async () => {
      try {
        const data = await fetchLocation();

        if (data.length === 0) {
          setLoader(true);
        } else {
          setLocationArray(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };

    fetchLocationData();

  }, []);

  useEffect(() => {

    if (LocationArray.length === 0) {
      setLoader(true);
    } else {
      const districtArray = [...new Set(LocationArray.map(item => item.district))];
      setDistictArray(districtArray);

    }

  }, [LocationArray]);
  

//Filter for Campaign 4
  useEffect(() => {
    if (status === 'All' && district === 'All') {
      setFilterreqArray(campaignArray);
    } else if (status === 'All' && district != 'All') {
      const filteredData = campaignArray.filter((item) => item.district === district);
      setFilterreqArray(filteredData);
    }else if (status != 'All' && district === 'All') {
      const filteredData = campaignArray.filter((item) => item.status === status);
      setFilterreqArray(filteredData);
    }else {
      const filteredData = campaignArray.filter((item) => item.status === status && item.district === district);
      setFilterreqArray(filteredData);
    }
  }, [campaignArray, status, district]);
  

  async function fetchData() {
    setLoader(true);
    await fetchCampaign();
    setLoader(false);
  }


  const navToLogin = () => {
      navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
      });
  };

  const fetchCampaign = async () => {
    try {
      const data = await fetchCamp(Token);

      if (data.message === true) {
        dispatch(setCampaignArray(data.data));
        
      } else if (data.message === "Invalid Token") {
        navToLogin();
      } else {
        tostMessage(data.message ||"You Are Offline");
      }
    } catch (error) {
      console.error('Error fetching verification code:', error);
    }
  };
  return (

    <ScrollView
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
  >
    {loader == true ? (
      <LoadPage />
    ) : (
      <DashboardStructure children1={<Children1 status={status} setstatus={setstatus} district={DistictArray} setdistrict={setdistrict} />} children2={<Children2 Data={FilterreqArray} />}></DashboardStructure>
    )}
  </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  childrenconCamp: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 5,
  },
})