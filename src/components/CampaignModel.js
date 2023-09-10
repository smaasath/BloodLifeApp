import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';

function CampaignModel({ isModalVisible, toggleModal, campaignId, Title, address, startDate, endDate, review, status, district, ContactNo }) {
    const navigation = useNavigation();
    const navToQrMain = () => {
        navigation.navigate("QrMain");
    };

    return (
        <>


            <Modal isVisible={isModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >

                <View style={styles.bigCon}>
                    <View style={{ alignItems: 'center', padding: 10 }}><Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Campaign Details</Text></View>
                    <View style={{height:1, width:'100%', backgroundColor:'black', margin:0,padding:0 }}></View>

                    <View style={{padding:20,paddingTop:30, }}>
                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Campaign ID</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{campaignId}</Text>
                            </View>

                        </View>


                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Title</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{Title}</Text>
                            </View>

                        </View>


                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>District</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{district}</Text>
                            </View>

                        </View>


                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Address</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{address}</Text>
                            </View>

                        </View>


                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Start Date</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{startDate}</Text>
                            </View>

                        </View>



                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>End Date</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{endDate}</Text>
                            </View>

                        </View>


                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Status</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{status}</Text>
                            </View>

                        </View>

                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Contact No</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{ContactNo}</Text>
                            </View>

                        </View>


                        <View style={styles.rowCon}>

                            <View style={{ ...styles.colConHead }}>
                                <Text style={{ ...styles.contentTextHead }}>Review</Text>
                            </View>

                            <View style={{ ...styles.colConContent }}>
                                <Text style={{ ...styles.conText }}>{review}</Text>
                            </View>

                        </View>



                    </View>







                    <View style={{ ...styles.rowCon, height: 60,}}>

                        <View style={{ ...styles.colConHead, alignItems: 'flex-start', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={toggleModal}
                            >
                                <View style={{ backgroundColor: 'gray', width: 140, height: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ ...styles.contentTextHead, color: 'white' }}>Cancel</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ ...styles.colConContent, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={navToQrMain}
                            >
                                <View style={{ backgroundColor: '#FF6565', width: 140, height: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ ...styles.contentTextHead }}>Accept</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>

            </Modal>
        </>
    );
}


const styles = StyleSheet.create({
    bigCon: {
        backgroundColor: 'white',
        paddingTop: 20,
        padding: 20,
        height: 550,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

    rowCon: {
        flexDirection: "row",
        height: 40
    },

    colConHead: {
        flex: 2,
    },

    colConContent: {
        flex: 3,
        backgroundColor: 'white'
    },

    fisrtText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 15
    },

    contentTextHead: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },

    conText: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 13,
    },


})
export default CampaignModel;