import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'



const setcolorbystatus = (status) => {
    switch (status) {
        case "Active":
            return '#4099ff';
        case "OnGoing":
            return '#FFB64D';
        case "completed":
            return '#2ed8b6';
    }
};

const setcolorbyReview = (Review) => {
    switch (Review) {
        case "Success":
            return '#2ed8b6';
        case "Average":
            return '#FFB64D';
        case "Fail":
            return '#FF5370';
    }
};


export default function CampaignComponent({Title, address, startDate, review, status, district, endDate}) {
    const TextColors = setcolorbystatus(status);
    const TextColorsReview = setcolorbyReview(review);

    return (
        <>
            <TouchableOpacity>
                <View style={styles.campcon}>
                    <View style={{ flexDirection: 'row', height: 80 }}>
                        <View style={{ flex: 3, }}>

                            <View style={{ flex: 6, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 23, color: TextColors }}>{Title}</Text>
                            </View>
                            <View style={{ flex: 2, }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 13, color: 'black' }}>{district}</Text>

                            </View>

                        </View>


                        <View style={{ flex: 1, }}>

                            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../assets/capm-img.png')} style={{ height: 90, width: 90, }}></Image>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', height: 30, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 11, color: 'black' }}>{address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', height: 20, }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 11, color: 'gray' }}>Start - {startDate}</Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 11, color: 'gray' }}>End - {endDate}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', height: 20, }}>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 11, color: TextColorsReview }}>{review}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        </>
    )
}

const styles = StyleSheet.create({
    campcon: {
        margin: 10,
        padding: 10,
        height: 165,
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