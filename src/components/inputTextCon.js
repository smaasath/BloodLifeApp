import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


const InputTextCon = ({ value, label, url,onChangeText,inputMode,maxLength }) => {


  return (
    <>


      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        activeOutlineColor="black"
        outlineColor='#2C3E50'
        inputMode={inputMode}
        maxLength={maxLength}
        left={
          <TextInput.Icon
            icon={() => (
              <Image
                source={{ uri: url }}
                style={{ height: 20, width: 20 }}
              />
            )}
          />
        }

      />
    </>
  )
}

const styles = StyleSheet.create({


})

export default InputTextCon;