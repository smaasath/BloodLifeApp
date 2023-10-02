import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DashboardStructure from '../components/DashboardStructure';
import LoadPage from '../components/LoadPage';
import CampaignComponent from '../components/CampaignComponent';
import EncryptedStorage from 'react-native-encrypted-storage';


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
function Children1({ status, setstatus,district,setdistrict}) {
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
        data={["All", "Ampara", "Anuradhapura","Batticaloa","Galle","Hambantota","Jaffna","Kandy","Kegalle","Kilinochchi","Kurunegala","Mannar","Matale","Matara","Mullaitivu","Nuwara Eliya","Polonnaruwa","Puttalam","Ratnapura","Trincomalee","Vavuniya"]}
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
  const [Token, setToken] = useState('');
  const [campArray, setcampArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(true);
  const [FilterreqArray, setFilterreqArray] = useState([]);
  const [status, setstatus] = useState("All");
  const [district, setdistrict] = useState("All");

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    
    fetchData();
  
  }, [Token]);

//Filter for Campaign 4
  useEffect(() => {
    if (status === 'All' && district === 'All') {
      setFilterreqArray(campArray);
    } else if (status === 'All' && district != 'All') {
      const filteredData = campArray.filter((item) => item.district === district);
      setFilterreqArray(filteredData);
    }else if (status != 'All' && district === 'All') {
      const filteredData = campArray.filter((item) => item.status === status);
      setFilterreqArray(filteredData);
    }else {
      const filteredData = campArray.filter((item) => item.status === status && item.district === district);
      setFilterreqArray(filteredData);
    }
  }, [campArray, status, district]);
  

  async function fetchData() {
    await retrieveUserSession();
    await fetchReq();
  }

  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem('user_session');

      if (session !== undefined) {
        const parsedSession = JSON.parse(session);
        setToken(parsedSession.Token);
      }
    } catch (error) {
      console.error('Error retrieving user session:', error);
    }
  }

  const fetchReq = async () => {
    var URL = 'http://localhost:8081//bloodlife/Api/CampaignApi.php';

    var headers = {
      'Authorization': `Bearer ${Token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };


    fetch(URL, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          setLoader(true);
        }
        return response.json();
      })
      .then((response) => {
        if (response.message === false) {
          setLoader(true);
          setcampArray([]);
        } else {
          setcampArray(response);
          setLoader(false);
        }
      })
      .catch((error) => {
        setLoader(true);
       
      });
  };
  return (

    <ScrollView
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
  >
    {loader == true ? (
      <LoadPage />
    ) : (
      <DashboardStructure children1={<Children1 status={status} setstatus={setstatus} district={district} setdistrict={setdistrict} />} children2={<Children2 Data={FilterreqArray} />}></DashboardStructure>
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