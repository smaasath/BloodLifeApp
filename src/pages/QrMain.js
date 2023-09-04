import React,{ useState } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function QrMain() {
  const [QrText, setQrText] = useState('');
  const [scanEnabled, setScanEnabled] = useState(true);

  const onSuccess = (e) => {
   setQrText(e.data);
   setScanEnabled(false);
  };


  const startScanAgain = () => {
    setQrText('');
    setScanEnabled(true); 
  };

  return (
    <>
    {scanEnabled ? (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.auto}
      topContent={
     
        
          <Text style={styles.textBold}>
            Scan Qr For Your Attentence
        </Text>
      }
          
    />
    ) : (
      <><TouchableOpacity
            onPress={startScanAgain}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity><Text style={styles.textBold}>
              {QrText}
            </Text></>
        )}
        </>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('QrMain', () => QrMain);
