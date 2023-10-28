import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const InputConPassword = ({  value, label,onChangeText}) => {


  const [passwordshow, setpasswordshow] = useState(true);

  const showpassword = () => {
    setpasswordshow(!passwordshow);
  };

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      activeOutlineColor="black"
      outlineColor='#2C3E50'
      secureTextEntry={passwordshow}
      onChangeText={onChangeText}
      right={
        <TextInput.Icon
          icon={() => (
            <TouchableOpacity onPress={showpassword}>
              <Image
                source={require("../../assets/icons8-eye-90.png")}
                style={{ height: 20, width: 20 }}
              />
            </TouchableOpacity>
          )}
        />
      }
      left={
          <TextInput.Icon
            icon={() => (
              <Image
                source={require("../../assets/icons8-password-30.png")}
                style={{ height: 20, width: 20 }}
              />
            )}
          />
        }
    />
  );
};

export default InputConPassword;
