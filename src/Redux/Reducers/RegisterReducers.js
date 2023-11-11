import {
    SET_EMAIL_CODE,
    SET_USER_NAME,
    SET_USER_PHONE_NUMBER,
    SET_USER_DOB,
    SET_USER_DISTRICT,
    SET_USER_DIVITION,
    SET_USER_NIC,
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    SET_USER_BLOODBANK,
    SET_USER_CONFIRM_PASSWORD,
    SET_USER_TOKEN,
    SET_USER_ARRAY,
    SET_REQUEST_ARRAY,
} from "../Action/RegisterAction";

const minimumDate = new Date();
minimumDate.setFullYear(minimumDate.getFullYear() - 18);

const initialState = {
    name: '',
    emailCode: '',
    phoneNumber: '',
    dob: minimumDate,
    district: '',
    divition: '',
    nic: '',
    email: '',
    password: '',
    bloodbank: '',
    confirmPassword: '',
    Token: '',
    UserArray: [],
    RequestArray: [],

}


function RegisterReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return { ...state, name: action.payload };
        case SET_EMAIL_CODE:
            return { ...state, emailCode: action.payload };
        case SET_USER_PHONE_NUMBER:
            return { ...state, phoneNumber: action.payload };
        case SET_USER_DOB:
            return { ...state, dob: action.payload };
        case SET_USER_DISTRICT:
            return { ...state, district: action.payload };
        case SET_USER_DIVITION:
            return { ...state, divition: action.payload };
        case SET_USER_NIC:
            return { ...state, nic: action.payload };
        case SET_USER_EMAIL:
            return { ...state, email: action.payload };
        case SET_USER_PASSWORD:
            return { ...state, password: action.payload };
        case SET_USER_BLOODBANK:
            return { ...state, bloodbank: action.payload };
        case SET_USER_CONFIRM_PASSWORD:
            return { ...state, confirmPassword: action.payload };
        case SET_USER_TOKEN:
            return { ...state, Token: action.payload };
        case SET_USER_ARRAY:
            return { ...state, UserArray: action.payload };
        case SET_REQUEST_ARRAY:
            return { ...state, RequestArray: action.payload };
        default:
            return state;
    }
}

export default RegisterReducer;
