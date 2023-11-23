
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

import React, { useState, useEffect } from 'react'




export default function Certificatecom({ item }) {

    const { filtereddata } = useSelector((state) => state.RegisterReducer);
    const dispatch = useDispatch();
    const [visible, setIsVisible] = useState(false);

    const images = [
        {
            uri: `data:image/jpeg;base64,${item.certificate_base64}`,
        },
    ]

    return (
        <>
   
            <View style={styles.foodcontainer}>
                <View style={{ flexDirection: "row", flex: 3 }}>

                    <Image
                        source={{
                            uri:
                                !item.certificate_base64 || item.certificate_base64 === null
                                    ? "https://classroomclipart.com/image/static7/preview2/certificate-of-excellence-with-star-clip-art-59659.jpg"
                                    : `data:image/jpeg;base64,${item.certificate_base64}`,
                        }}
                        style={styles.image}
                    />


                </View>
            


            </View>
        </>

    )
}


const styles = StyleSheet.create({
    foodcontainer: {
        margin: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        width: 300,
        height: 170,
        borderRadius: 5,
        alignItems: "center",
        justifyContent :"center"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        borderRadius: 5,
    },
})
