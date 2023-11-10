import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';



export default function InputField({ url, placeholder, onChangeText, inputMode, maxLength, secureTextEntry }) {

    const [passwordshow, setpasswordshow] = useState(secureTextEntry);

    const showpassword = () => {
        setpasswordshow(!passwordshow);
    };

    return (
        <View style={styles.InputCon}>
            <Image
                source={{ uri: url }}
                style={{ height: 20, width: 20,margin:10 }}
            />
            <TextInput
                style={{ flex: 10, paddingLeft: 10, color: "black", }}
                placeholder={placeholder}
                onChangeText={onChangeText}
                placeholderTextColor={"black"}
                inputMode={inputMode}
                maxLength={maxLength}
                secureTextEntry={passwordshow}


            >

            </TextInput>
            <View style={{ flex: 1 }}>
                {secureTextEntry ? (
                    <TouchableOpacity onPress={showpassword}>
                        <Image
                            source={{ uri: "https://img.icons8.com/ios-glyphs/30/visible--v1.png" }}
                            style={{ height: 20, width: 20 }}
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    InputCon: {
        flexDirection: "row",
        height: 50,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        padding: 5,
        margin: 10,
        marginLeft: 25,
        marginRight: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,

    }
})
