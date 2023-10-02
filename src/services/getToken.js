import EncryptedStorage from 'react-native-encrypted-storage';
import React, { useState, useEffect } from 'react';

export default function getToken() {

    const [Token, setDonorToken] = useState('');

    useEffect(() => {

        async function retrieveUserSession() {
            try {
                const session = await EncryptedStorage.getItem("user_session");

                if (session !== undefined) {
                    const parsedSession = JSON.parse(session);
                    setDonorToken(parsedSession.Token);


                }
            } catch (error) {
                console.error("Error retrieving user session:", error);
            }
        }


        retrieveUserSession();
    }, []);



    return Token;

}


