import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import EncryptedStorage from 'react-native-encrypted-storage';
import DashboardStructure from '../components/DashboardStructure';
import BloodBankRequest from '../components/BloodBankRequest';
import LoadPage from '../components/LoadPage';
import { useSelector, useDispatch } from 'react-redux';
import { setUserArray, setRequestArray } from '../Redux/Action/RegisterAction';
import { tostMessage } from '../services/Validations';
import fetchReq from '../services/fetchReq';
import { useNavigation } from '@react-navigation/native';

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
          <Text style={{ color: 'red' }}>No requests found</Text>
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

  const { Token, RequestArray } = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(true);
  const [FilterreqArray, setFilterreqArray] = useState([]);
  const [status, setstatus] = useState("All");

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {

    fetchData();

  }, []);


  useEffect(() => {

    if (status === 'All') {

      setFilterreqArray(RequestArray);
    } else {
      const filteredData = RequestArray.filter((item) => item.requestStatus === status);
      setFilterreqArray(filteredData);
    }
  }, [RequestArray, status]);

  async function fetchData() {
    setLoader(true);
    await fetchReqest();
    setLoader(false);
  }

  const navigation = useNavigation();

  const navToLogin = () => {
      navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
      });
  };

  const fetchReqest = async () => {

    try {
      const data = await fetchReq(Token);

      if (data.message === true) {
        dispatch(setRequestArray(data.data));

      } else if (data.message === "Invalid Token") {
        navToLogin();
      } else {
        tostMessage(data.message || "You Are Offline");
      }
    } catch (error) {
      console.error('Error fetching verification code:', error);
    }
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