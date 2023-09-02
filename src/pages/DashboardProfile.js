import { StyleSheet, Text, View, Image, TouchableOpacity,Switch,isEnabled,toggleSwitch,} from 'react-native'
import React, { useState } from 'react';
import DashboardStructure from '../components/DashboardStructure'
import { useNavigation } from '@react-navigation/native';



function Children1() {
  return (
    <>
      <View style={{ zIndex: 1, marginTop: 30, marginBottom: -75, alignItems: 'center' }}>
        <Image source={require('../../assets/sample-profile.jpg')} style={{ height: 150, width: 150, borderRadius: 90 }}></Image>

      </View>

    </>
  )
}

function Children2() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <View style={{ marginTop: 100 }}>
        <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FF6565', padding: 10, }}>
            Profile Details
          </Text>
          <TouchableOpacity><Image source={require('../../assets/account-edit.png')} style={{ height: 50, width: 50, borderRadius: 90, tintColor: '#FF6565', }}></Image></TouchableOpacity>
        </View>

        <View style={styles.bigCon}>
        <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Availability</Text>
            </View>
            <View style={styles.contentCon}>
            <View style={{...styles.container, paddingLeft:50,}}>
      <Switch
        trackColor={{false: '#767577', true: '#96ffad'}}
        thumbColor={isEnabled ? '#11f542' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
            </View>

          </View>
        </View>
        <View style={styles.bigCon}>
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

        <View style={styles.bigCon}>
        <View style={{ flexDirection: 'row', }}>
            <View style={styles.headingCon}>
              <Text style={styles.headingText}>Logout</Text>
            </View>
            <View style={styles.contentCon}>
            <TouchableOpacity><Image source={require('../../assets/power.png')} style={{ height: 50, width: 50, borderRadius: 90, tintColor: '#FF6565', }}></Image></TouchableOpacity>
            </View>

          </View>
        </View>



      </View>
    </>
  )
}

export default function DashboardProfile() {
  const navigation = useNavigation();
  const logout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

  }
  return (
    <>
      <DashboardStructure children1={<Children1 />} children2={<Children2 />}></DashboardStructure>

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