import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function RankingComponent({name,coinValue,noOfDonation}) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.con}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 2, height: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/sample-profile.jpg')} style={{ height: 50, width: 50, borderRadius: 90 }}></Image>
                    </View>
                    <View style={{ flex: 6, height: 100, }}>
                        <View style={{ flex: 1, height: 50, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                            <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>Number Of Donation: {noOfDonation}</Text>
                        </View>
                
                    </View>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/rank.png')} style={{ height: 50, width: 50, borderRadius: 90 }}></Image>
                        <Text style={{ color: '#FFD148', fontSize: 25, fontWeight: 'bold' }}>{coinValue}</Text>
                        <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold' }}>Rank</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        margin: 10,
        padding: 10,
        height: 120,
        width: 350,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    },
})