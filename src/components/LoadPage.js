import { StyleSheet, Text, View, Image,Dimensions} from 'react-native'
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

                        <Image
                            source={require('../../assets/reload.png')}
                            style={{ height: 100, width: 100, borderRadius: 90 }}

                        />

                        <Text style={{ color: 'black' }}>Please Reload the Page</Text>
                    </View>

                </View>
            </View>

        </>


    )
}

const styles = StyleSheet.create({})