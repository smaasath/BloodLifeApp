import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import EncryptedStorage from 'react-native-encrypted-storage';
import DashboardStructure from '../components/DashboardStructure';
import BloodBankRequest from '../components/BloodBankRequest';
import LoadPage from '../components/LoadPage';

function Children2({ Data }) {
  return (
    <View>
      <Text style={{ margin: 40, marginBottom: 5, color: 'black' }}>
        Blood Bank Request
      </Text>
      <View style={styles.childrenconReq}>
        {Data?.length > 0 ? (
          Data.map((item, index) => (
            <BloodBankRequest
              key={index}
              status={item.requestStatus}
              BloodType={item.bloodGroup}
              BloodQuntity={item.bloodQuantity + 'ml'}
              RequestID={'B' + item.bloodBankRequestId}
              RequestDate={item.createdDate}
              RequestHospital={item.name || 'Blood Bank Request'}
              location={item.hospitalAddress}
              bloodBankName={item.bloodBankName}
              bloodGroup={item.bloodGroup}
            />
          ))
        ) : (
          <Text style={{color:'red'}}>No requests found</Text>
        )}
      </View>
    </View>
  );
}

function Children1({ status, setstatus }) {
  
  return (
    <View style={{ margin: 30 }}>
      <SelectDropdown
        data={['All', 'Normal', 'Emergency', 'completed', 'Urgent']}
        buttonStyle={{ borderRadius: 10, width: '40%', height: 40 }}
        defaultButtonText={['Status']}
        buttonTextStyle={{ fontSize: 14 }}
        onSelect={(selectedItem) => setstatus(selectedItem)}
      />
    </View>
  );
}

export default function DashboardHospitalRequest() {
  const [bloodBankId, setBloodBankId] = useState('');
  const [reqArray, setReqArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(false);
  const [FilterreqArray, setFilterreqArray] = useState([]);
  const [status, setstatus] = useState("All");

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, [bloodBankId]);


  useEffect(() => {
 
    if (status === 'All') {
     
      setFilterreqArray(reqArray);
    } else {
      const filteredData = reqArray.filter((item) => item.requestStatus === status);
      setFilterreqArray(filteredData);
    }
  }, [reqArray, status]);

  async function fetchData() {
    await retrieveUserSession();
    await fetchReq();
  }

  async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem('user_session');

      if (session !== undefined) {
        const parsedSession = JSON.parse(session);
        setBloodBankId(parsedSession.bloodBankId);
      }
    } catch (error) {
      console.error('Error retrieving user session:', error);
    }
  }

  const fetchReq = async () => {
    var URL = 'http://localhost:8081/bloodlife/Api/BloodBankRequestApi.php';

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    var Data = {
      bloodBankId: bloodBankId,
    };

    fetch(URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => {
        if (!response.ok) {
          setLoader(true);
        }
        return response.json();
      })
      .then((response) => {
        if (response.message === 'Request Not Found') {
          setLoader(true);
          setReqArray([]);
        } else {
          setReqArray(response);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  };

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {loader ? (
        <LoadPage />
      ) : (
        <DashboardStructure children1={<Children1 status={status} setstatus={setstatus} />} children2={<Children2 Data={FilterreqArray} />} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  childrenconReq: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
})