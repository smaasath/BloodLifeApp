import { ToastAndroid } from "react-native";



export  function emptyValueValidate(value) {
    return value == "" ? false : true;
}

export  function ValidateEmail(value) {
    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(value);
}


export function ValidateContactNumber(number) {
    var regex = /^(?:\+94|0)(?:[0-9]{9})$/;
    return regex.test(number);
}

export  function ValidatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);

}

export  function ValidateConfirmPassword(password,conPassword) {
    return password === conPassword;
}

export function validateSriLankanNIC(nic) {

    const cleanNIC = nic.replace(/\s/g, '').toUpperCase();
  
    const pattern1 = /^[0-9]{9}[VX]$/i.test(cleanNIC);
    const pattern2 = /^\d{12}$/.test(cleanNIC);
  
    return pattern1 || pattern2;
  }


export function tostMessage(status) {
    ToastAndroid.showWithGravityAndOffset(
      status,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      2,
      50,
    );
  }