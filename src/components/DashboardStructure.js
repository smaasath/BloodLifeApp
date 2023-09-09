import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function DashboardStructure(props) {
    const navigation = useNavigation();


    const navToCertificate = () => {
        navigation.navigate("Certificate");
    };

    const navToQrMain = () => {
        navigation.navigate("QrMain");
    };

    return (
        <>
            <View style={styles.topbar}>
                <View style={styles.topbarcol1}>
                    <Image source={require('../../assets/logo.png')} style={{ height: 30, width: 65, }}></Image>
                </View>

                <View style={styles.topbarcol2}>
                    <TouchableOpacity onPress={navToCertificate}>
                        <Image source={require('../../assets/certificate.png')} style={{ height: 30, width: 30, tintColor: 'white' }}></Image>
                    </TouchableOpacity>

                </View>

                <View style={styles.topbarcol2}>
                    <TouchableOpacity onPress={navToQrMain}>
                        <Image source={require('../../assets/qrcode.png')} style={{ height: 30, width: 30, tintColor: 'white' }}></Image>
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView>
                <View style={styles.firstcon}>
                    <View style={styles.row1}>
                    {props.children1}
                    </View>
                    <View style={styles.row2}>
                    {props.children2}

                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    firstcon: {
        flexDirection: 'column',
        backgroundColor: "#FF6565",

    },
    row1: {
        flex: 1,

    },
    row2: {
        flex: 4,

        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#F2F3F4',

    },

    te: {
        color: 'black',
        fontSize: 100,
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: '#FF6565',
        height: '7%',
        padding: 10,
        paddingBottom:40,
        
    },

    topbarcol1: {
        flex: 10,

    },
    topbarcol2: {
        flex: 2,


    }
})
