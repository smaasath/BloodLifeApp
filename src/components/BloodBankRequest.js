import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import RequestModel from './RequestModel';



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



export default function BloodBankRequest({ item }) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const TextColors = setcolorbystatus(item.requestStatus);

    return (


        <>
            <RequestModel
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                item={item}

            >

            </RequestModel>
            <TouchableOpacity
                onPress={toggleModal}
            >
                <View style={styles.con}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 3, height: 50, justifyContent: 'center', alignItems: 'flex-start', }}>
                            <Text style={{ color: TextColors, fontWeight: 'bold', fontSize: 30, }}>{"B" + item.bloodBankRequestId}</Text>
                        </View>
                        <View style={{ flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ color: TextColors, fontWeight: 'bold', fontSize: 11, }}>{item.bloodQuantity}</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 8, }}>{item.hospitalName != null ? item.hospitalName : "Blood Bank Request"}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: '', }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 10, }}>{item.createdDate}</Text>
                        </View>
                        <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: 'flex-end', }}>
                            <Text style={{ color: TextColors, fontWeight: 'bold', fontSize: 10, }}>{item.requestStatus}</Text>
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
        height: 130,
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