import EncryptedStorage from 'react-native-encrypted-storage';

export default async function retrieveUserSession() {
    try {
      const session = await EncryptedStorage.getItem("user_session");

      if (session !== undefined) {

        const parsedSession = JSON.parse(session);
        return (parsedSession.Token);

      }
    } catch (error) {
    
    }
  }

