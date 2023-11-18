import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import RequestModel from '../components/RequestModel'
import Certificatecom from '../components/CertificateCom';
import getCertificates from '../services/getCertificates';
import { tostMessage } from '../services/Validations';
import { useSelector, useDispatch } from 'react-redux';





export default function Certificate() {
  const { Token } = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [donation, setdonation] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };




  useEffect(() => {

    const fetchCertificates = async () => {


      try {
        const data = await getCertificates(Token);

        if (data.message === true) {
          setdonation(data.data);
          console.log(donation);
        } else if (data.message === "Invalid Token") {
          navToLogin();
        } else {
          tostMessage(data.message || "You Are Offline");
        }
      } catch (error) {
        console.error('Error fetching Donations:', error);
      }

    };

    fetchCertificates();
  }, []);

  return (
    <>
      <ScrollView>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', padding: 10 }}>
          {donation.length > 0 ? (
            donation.map((item, index) => (
              <Certificatecom
                key={index} // Ensure to provide a unique key for each item in the map
                image={item.certificate_base64}
              >
                {/* Additional props or components for Certificatecom */}
              </Certificatecom>
            ))
          ) : (
            <Text style={{ color: 'red' }}>No Donation found</Text>
          )}

        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})