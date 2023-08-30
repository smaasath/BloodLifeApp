import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const setcolorbystatus = (status) => {
    switch (status) {
        case "Normal":
            return '#4099ff';
        case "Emergency":
            return '#FFB64D';
        case "completed":
            return '#2ed8b6';
        case "Urgent":
            return '#FF5370';

    }
};



export default function BloodBankRequest({ status, BloodType, BloodQuntity,RequestID,RequestDate,RequestHospital }) {

    const TextColors = setcolorbystatus(status);

    return (


        <>
            <TouchableOpacity>
                <View style={styles.con}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ color: TextColors, fontWeight: 'bold', fontSize: 40, }}>{BloodType}</Text>
                        </View>
                        <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ color: TextColors, fontWeight: 'bold', fontSize: 20, }}>{BloodQuntity}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1,justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, }}>{RequestID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 8, }}>{RequestHospital}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: '', }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 10, }}>{RequestDate}</Text>
                        </View>
                        <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: 'flex-end', }}>
                            <Text style={{ color: TextColors, fontWeight: 'bold', fontSize: 10, }}>{status}</Text>
                        </View>
                    </View>



                </View>
            </TouchableOpacity>


        </>
    )
}

const styles = StyleSheet.create({
    con: {

        margin: 10,
        padding: 10,
        height: 170,
        width: 150,
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