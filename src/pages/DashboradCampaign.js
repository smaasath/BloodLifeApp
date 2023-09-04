import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import DashboardStructure from '../components/DashboardStructure'
import SelectDropdown from 'react-native-select-dropdown';
import CampaignComponent from '../components/CampaignComponent';


function Children2() {
  return (
    <>
      <View style={{margin:40, marginBottom:5,}}>
        <Text style={{color:'black'}}>
          Campaigns
        </Text>
      </View>
      <ScrollView>
      <View style={styles.childrenconCamp}>
       <CampaignComponent 
       Title={"Test Name Campaign"} 
       address={"185 A/1, Hajiyar Road, Sainthamaruthu-13"} 
       status={"Active"} 
       review={""} 
       startDate={"2023-08-30"} 
       district={"Ampara"} 
       endDate={"2023-09-02"}>

       </CampaignComponent>

       <CampaignComponent 
       Title={"Test Name for Campaign"} 
       address={"185 A/1, Hajiyar Road, Sainthamaruthu-13"} 
       status={"completed"} 
       review={"Success"} 
       startDate={"2023-08-30"} 
       district={"Ampara"} 
       endDate={"2023-09-02"}>
        
       </CampaignComponent>

       <CampaignComponent 
       Title={"Test Name for Campaign"} 
       address={"185 A/1, Hajiyar Road, Sainthamaruthu-13"} 
       status={"OnGoing"} 
       review={""} 
       startDate={"2023-08-30"} 
       district={"Ampara"} 
       endDate={"2023-09-02"}>
        
       </CampaignComponent>

       <CampaignComponent 
       Title={"Test Name Campaign"} 
       address={"185 A/1, Hajiyar Road, Sainthamaruthu-13"} 
       status={"completed"} 
       review={"Average"} 
       startDate={"2023-08-30"} 
       district={"Ampara"} 
       endDate={"2023-09-02"}>
        
       </CampaignComponent>

       <CampaignComponent 
       Title={"Test Name Campaign"} 
       address={"185 A/1, Hajiyar Road, Sainthamaruthu-13"} 
       status={"completed"} 
       review={"Fail"} 
       startDate={"2023-08-30"} 
       district={"Ampara"} 
       endDate={"2023-09-02"}>
        
       </CampaignComponent>

    


       
        
      </View>
      </ScrollView>
    </>
  )
}
function Children1() {
  return (
    <View style={{ margin: 30, flexDirection:'row', justifyContent:'space-between' }}>
      <SelectDropdown
        data={["All","my", "Completed", "Active"]}
        buttonStyle={{ borderRadius: 10, width: '40%', height: 40 }}
        defaultButtonText={["Status"]}
        buttonTextStyle={{ fontSize: 14, }}
      />

<SelectDropdown
        data={["All", "Ampara", "Kandy"]}
        buttonStyle={{ borderRadius: 10, width: '40%', height: 40 }}
        defaultButtonText={["District"]}
        buttonTextStyle={{ fontSize: 14, }}
      />

    </View>
  )
}


export default function DashboradCampaign() {
  return (
    <DashboardStructure children1={<Children1 />} children2={<Children2 />}></DashboardStructure>
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