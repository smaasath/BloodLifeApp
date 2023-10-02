import { ActivityIndicator,StyleSheet, Text, View, Image,Dimensions} from 'react-native'
import React from 'react'
import DashboardStructure from './DashboardStructure'

export default function LoadPage() {
    const { height: windowHeight } = Dimensions.get('window');
    return (
        <>
            <DashboardStructure></DashboardStructure>
            <View style={{ height: windowHeight }}>
                <View style={{ flex: 1, }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <ActivityIndicator size={75} color="#FF6565" />

                        <Text style={{ color: 'black',fontSize:15,fontWeight:"bold",padding:10 }}>Loading..</Text>
                    </View>

                </View>
            </View>

        </>


    )
}

const styles = StyleSheet.create({})