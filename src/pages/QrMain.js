import React, { useState, useEffect } from 'react';
import attentence from '../services/attendace';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useSelector, useDispatch } from 'react-redux';


export default function QrMain() {
  const [QrText, setQrText] = useState('');
  const [scanEnabled, setScanEnabled] = useState(true);
  const [Result, setResult] = useState('');
  const { Token, UserArray, RequestArray } = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  
  useEffect(() => {

    const PutAttendace = async () => {
      try {
        const data = await attentence(Token,QrText);
        setResult(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };

    PutAttendace();

  }, [QrText]);


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
        <>
          <View style={{ flex: 1, alignItems: "center",justifyContent: "center"  }}>
            <Text style={styles.textBold}>
              {Result}
            </Text>
          </View>
          <View style={{ flex: 4, alignItems: "center", justifyContent: "center" }}>

            <View style={styles.buttonTouchable}>
              <TouchableOpacity onPress={startScanAgain}>
                <Text style={styles.buttonText}>Scan Again</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonTouchable}>
              <TouchableOpacity onPress={startScanAgain}>
                <Text style={styles.buttonText}>Go To Home</Text>
              </TouchableOpacity>
            </View>

          </View>

        </>
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
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
  },
  buttonText: {
    fontSize: 21,
    color: 'white',
  },
  buttonTouchable: {
    backgroundColor: '#BD1616',
    width: "40%",
    height: 38,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin:25,

  },
});

AppRegistry.registerComponent('QrMain', () => QrMain);
