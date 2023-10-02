import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, isEnabled, toggleSwitch,ScrollView,RefreshControl } from 'react-native'
import React, { useState ,useEffect} from 'react';
import DashboardStructure from '../components/DashboardStructure'
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import LoadPage from '../components/LoadPage';



function Children1({data}) {
  return (
    <>
      <View style={{ zIndex: 1, marginTop: 30, marginBottom: -75, alignItems: 'center' }}>
        <Image  source={
    data.image
      ? { uri: `data:image/jpeg;base64,${data.image}` }
      : require('../../assets/testuser.png')
  }
   style={{ height: 150, width: 150, borderRadius: 90 }}></Image>

      </View>

    </>
  )
}

function Children2({name,bloodGroup,dob,contactNumber,nic,donationLastDate,availability,medicalReport,}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await clearStorage();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error) {
      // Handle any potential errors that occur during storage clearing
      console.error("Error clearing storage:", error);
    }
  }



  async function clearStorage() {
    try {
      await EncryptedStorage.clear();
    } catch (error) {
      // Handle any potential errors that occur during storage clearing
      console.error("Error clearing storage:", error);
      throw error; // Rethrow the error to be caught in the logout function
    }
  }

  return (
    <>
      <View style={{ marginTop: 100 }}>
        <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6565', padding: 10, }}>
            Profile Details
          </Text>
        </View>

        <View style={{ paddingLeft: 25, }}>
          <Text style={styles.contentText}>Availability</Text>
        </View>

        <View style={styles.bigCon}>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Availability</Text>
            </View>
            <View style={styles.contentCon}>
              <View style={{ ...styles.container, paddingLeft: 50, }}>
                <Switch
                  trackColor={{ false: '#767577', true: '#96ffad' }}
                  thumbColor={isEnabled ? '#11f542' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

          </View>
        </View>
        <View style={{ paddingLeft: 25, }}>
          <Text style={styles.contentText}>Details</Text>
        </View>
        <View style={styles.bigCon}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity><Image source={require('../../assets/account-edit.png')} style={{ height: 30, width: 30, borderRadius: 90, }}></Image></TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Name  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>Mohamed Aasath  </Text>
            </View>

          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Contact Number  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>0755701765</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>NIC  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>200000000</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>District  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>Ampara</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Division  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>Sainthamaruthu</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Donation Last Date </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>2023-08-09</Text>
            </View>

          </View>
        </View>

        <View style={{ paddingLeft: 25, }}>
          <Text style={styles.contentText}>Logout</Text>
        </View>

        <View style={styles.bigCon}>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Logout</Text>
            </View>
            <View style={{ ...styles.contentCon, alignItems: 'flex-end', marginRight: 50, }}>

              <TouchableOpacity
                onPress={logout}
              >
                <Image source={require('../../assets/logout.png')} style={{ height: 40, width: 40, borderRadius: 90, }}>
                </Image>
              </TouchableOpacity>

            </View>

          </View>
        </View>



      </View>
    </>
  )
}

export default function DashboardProfile() {


  const [donorId, setDonorId] = useState('');
  const [UserArray, setUserArray] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loader, setloader] = React.useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [donorId]);


  async function fetchData() {
    await retrieveUserSession();
    await fetchUser();
  
  }
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
          setloader(true);
      }
      return response.json();
      })
      .then((response) => {
        if (response.message == "Request Not Found") {
          setloader(true);
          setUserArray("");
      } else {
          setUserArray(response);
          setloader(false);

      }



      })
      .catch((error) => {
        setloader(true);
      });
  };


  return (
    <>

<ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                {loader == true ? (
                    <>
                    <LoadPage></LoadPage>
                    </>
                ) : (
                  <DashboardStructure children1={<Children1 data={UserArray} />} children2={<Children2 />}></DashboardStructure>
                )}

            </ScrollView>
     

    </>
  )
}

const styles = StyleSheet.create({
  bigCon: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  headingCon: {
    flex: 4,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 30
  },

  headingText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },

  contentCon: {
    flex: 5,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },

  contentText: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold'
  },
})