import { StyleSheet, Text, View, Image, TouchableOpacity, Switch, isEnabled, toggleSwitch, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react';
import DashboardStructure from '../components/DashboardStructure'
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import LoadPage from '../components/LoadPage';
import { useSelector, useDispatch } from 'react-redux';
import { setUserArray, setRequestArray } from '../Redux/Action/RegisterAction';
import fetchUser from '../services/fetchUser';
import { tostMessage } from '../services/Validations';
import fetchReq from '../services/fetchReq';



function Children1({ data }) {
  return (
    <>
      <View style={{ zIndex: 1, marginTop: 30, marginBottom: -75, alignItems: 'center' }}>
        <Image source={
          data.image
            ? { uri: `data:image/jpeg;base64,${data.image}` }
            : require('../../assets/testuser.png')
        }
          style={{ height: 150, width: 150, borderRadius: 90 }}></Image>

      </View>

    </>
  )
}

function Children2({ data }) {
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation();

  const navtoMedicalRep = () => {
    navigation.navigate("MedicalRepoer");
  };
  const navToEdit = () => {
    navigation.navigate("EditProfile");
  };

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
             <Text style={{color:"black"}}>{data.availability}</Text>
            </View>

          </View>
        </View>
        <View style={{ paddingLeft: 25, }}>
          <Text style={styles.contentText}>Details</Text>
        </View>
        <View style={styles.bigCon}>
          <View style={styles.contentCon}>
            <TouchableOpacity onPress={navToEdit}><Text style={{ ...styles.contentText, color: "blue", fontSize: 15 }}>Edit</Text></TouchableOpacity>
          </View>

          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Name  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.name}</Text>
            </View>

          </View>
          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Contact Number  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.contactNumber}</Text>
            </View>

          </View>

          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>NIC  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.nic}</Text>
            </View>

          </View>

          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>District  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.district}</Text>
            </View>

          </View>

          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Division  </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.division}</Text>
            </View>

          </View>

          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Donation Last Date </Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.donationLastDate !=null ? data.donationLastDate  : "Not set yet"}</Text>
            </View>

          </View>

          <View style={styles.boderstyle}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Blood Group</Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.bloodGroup !=null ? data.bloodGroup : "Not set yet"}</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>DOB</Text>
            </View>
            <View style={styles.contentCon}>
              <Text style={styles.contentText}>{data.dob}</Text>
            </View>

          </View>
        </View>


        
        <View style={{ paddingLeft: 25, }}>
          <Text style={styles.contentText}>Medical</Text>
        </View>

        <View style={styles.bigCon}>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Medical Report</Text>
            </View>
            <View style={{ ...styles.contentCon, alignItems: 'flex-end',}}>

              <TouchableOpacity
                onPress={navtoMedicalRep}
              >
                <Image source={require('../../assets/icons8-view-90.png')} style={{ height: 40, width: 40, borderRadius: 90, }}>
                </Image>
              </TouchableOpacity>

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
            <View style={{ ...styles.contentCon, alignItems: 'flex-end',}}>

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

  const { Token, UserArray } = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  useEffect(() => {

    fetchUserDetail();

  }, []);

  const fetchUserDetail = async () => {


    try {
        const data = await fetchUser(Token);

        if (data.message === true) {
            dispatch(setUserArray(data));
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
    <>

      <ScrollView>
        {UserArray == null  ? (
          <>
            <LoadPage></LoadPage>
          </>
        ) : (
          <DashboardStructure children1={<Children1 data={UserArray} />} children2={<Children2 data={UserArray} />}></DashboardStructure>
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
    paddingLeft: 10
  },

  headingText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },

  contentCon: {
    flex: 5,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },

  contentText: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold'
  },

  boderstyle: {
    flexDirection: 'row',
    borderWidth: 0,
    borderBottomWidth: 0.2,
    borderBottomColor: "#85929E"
  }
})