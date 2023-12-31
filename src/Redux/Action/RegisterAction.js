export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PHONE_NUMBER = 'SET_USER_PHONE_NUMBER';
export const SET_USER_DOB = 'SET_USER_DOB';
export const SET_USER_DISTRICT = 'SET_USER_DISTRICT';
export const SET_USER_DIVITION = 'SET_USER_DIVITION';
export const SET_USER_NIC = 'SET_USER_NIC';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_EMAIL_CODE = 'SET_EMAIL_CODE';
export const SET_USER_BLOODBANK = 'SET_USER_BLOODBANK';
export const SET_USER_CONFIRM_PASSWORD = 'SET_USER_CONFIRM_PASSWORD';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_USER_ARRAY = 'SET_USER_ARRAY';
export const SET_REQUEST_ARRAY = 'SET_REQUEST_ARRAY';
export const SET_CAMPAIGN_ARRAY = 'SET_CAMPAIGN_ARRAY';
export const SET_CERTIFICATE_ARRAY = 'SET_CERTIFICATE_ARRAY';
export const SET_AVAILABILITY = 'SET_AVAILABILITY';



export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setPhoneNumber = phoneNumber => dispatch => {
    dispatch({
        type: SET_USER_PHONE_NUMBER,
        payload: phoneNumber,
    });
};

export const setDOB = dob => dispatch => {
    dispatch({
        type: SET_USER_DOB,
        payload: dob,
    });
};

export const setDistrict = district => dispatch => {
    dispatch({
        type: SET_USER_DISTRICT,
        payload: district,
    });
};

export const setDivition = divition => dispatch => {
    dispatch({
        type: SET_USER_DIVITION,
        payload: divition,
    });
};

export const setNIC = NIC => dispatch => {
    dispatch({
        type: SET_USER_NIC,
        payload: NIC,
    });
};

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_USER_EMAIL,
        payload: email,
    });
};

export const setPassword = password => dispatch => {
    dispatch({
        type: SET_USER_PASSWORD,
        payload: password,
    });
};

export const setEmailCode = EmailCode => dispatch => {
    dispatch({
        type: SET_EMAIL_CODE,
        payload: EmailCode,
    });
};

export const setBloodBank = BloodBank => dispatch => {
    dispatch({
        type: SET_USER_BLOODBANK,
        payload: BloodBank,
    });
};

export const setConfirmPassword = ConfirmPassword => dispatch => {
    dispatch({
        type: SET_USER_CONFIRM_PASSWORD,
        payload: ConfirmPassword,
    });
};

export const setUserToken = Token => dispatch => {
    dispatch({
        type: SET_USER_TOKEN,
        payload: Token,
    });
};

export const setUserArray = UserArray => dispatch => {
    dispatch({
        type: SET_USER_ARRAY,
        payload: UserArray,
    });
};

export const setRequestArray = RequestArray => dispatch => {
    dispatch({
        type: SET_REQUEST_ARRAY,
        payload: RequestArray,
    });
};

export const setCampaignArray = campaignArray => dispatch => {
    dispatch({
        type: SET_CAMPAIGN_ARRAY,
        payload: campaignArray,
    });
};

export const setCertificate = certificateArray => dispatch => {
    dispatch({
        type: SET_CERTIFICATE_ARRAY,
        payload: certificateArray,
    });
};
export const setAvailability = availability  => dispatch => {
    dispatch({
        type: SET_AVAILABILITY,
        payload: availability,
    });
};
