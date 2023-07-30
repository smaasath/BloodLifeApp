import { StyleSheet, Text, View ,TextInput,} from 'react-native'
import React, { useState } from 'react';

const InputTextCon = ({ onChangeText, placeholder,value,password}) => {

  const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
    
      const inputBorderColor = isFocused ? '#2E86C1' : 'gray';


      


  return (
    
     <TextInput
                      style={[styles.input,{ borderColor: inputBorderColor }]}
                      placeholder={placeholder}
                      placeholderTextColor="#000"
                      value={value}
                      onChangeText={onChangeText}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      secureTextEntry={password}
                      
                    />
  
  )
}

const styles = StyleSheet.create({ 
    
    input: {
    width: '95%',
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#EFEFEF',
    color: '#000',
  },

  

})

export default InputTextCon;