/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {
  init,
  initializeTransaction,
  refreshToken,
  MposWrapperEmitter,
} from 'react-native-mpos-wrapper';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const configObect = {
  attestationHost: 'https://mpos-uat.fasspay.com:9001', //To set the attestation server’s URL. This field is mandatory if attestation is enabled.
  attestationHostCertPinning:
    'sha256/BJlJjxY7OHxhAz6yqy2gm58+qlP0AGwnBHDIG6zkhfU=', //  To set the attestation host’s certificate if SDK should verify with certificate pinning method.
  attestationHostReadTimeout: 10000,
  attestationRefreshInterval: 300000,
  attestationConnectionTimeout: 30000,
  /* To set the Google API Key for Google Safetynet Attestation purpose.
  This field is mandatory. This requires developer to register an
  account under Google Developer Console > Android Device
  Verification API. For more information, please visit this link:
  https://developer.android.com/training/safetynet/attestation.htm
  l#obtain-api-key*/
  googleApiKey: 'AIzaSyBEwbWEnuL12mp0C1zjj-W2tHm770uK82Q',

  accessKey: 'kT/BjPDNDr0npGasHek0XIt2rVqfkCMx+n6ZHhoWJlYeAg==', //To set the Access Key. This field is mandatory. Soft Space will provide the Access Key.
  secretKey: 'EPnYtWJwEZ2bphgBrKrJA0LDRS9ZcASsuwy7CQTJmOU=', //To set the Secret Key. This field is mandatory. Soft Space will provide the Secret Key.
  uniqueId: 'rzp03', // To set the uniqueID provided by Soft Space.
  developerId: '9nD9hrW8EMWB375', //To set the developerID provided by Soft Space.
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log('Registering the events...');
    MposWrapperEmitter?.addListener('REFRESH_TOKEN_ACTION', data => {
      console.log('refreshToken Listener:', JSON.stringify(data));
    });
    MposWrapperEmitter?.addListener('INITIALIZE_TRANSACTION_ACTION', data => {
      console.log('TransactionResult Listener:', JSON.stringify(data));
    });
    MposWrapperEmitter?.addListener('VOID_TRANSACTION_ACTION', data => {
      console.log('TransactionUIEvent Listener:', JSON.stringify(data));
    });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text
          style={{
            fontSize: 18,
            padding: 16,
          }}>
          Sample React-Native MPOS Wrapper
        </Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TouchableHighlight
            style={{ padding: 28, backgroundColor: 'aqua', borderRadius: 12 }}
            onPress={async () => {
              try {
                const u = await init(configObect);
                Alert.alert(`${u}`);
              } catch (e) {
                console.log('Error', e);
              }
            }}>
            <Text>Click to Initialize MPOS SDK</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              padding: 28,
              marginTop: 24,
              backgroundColor: 'pink',
              borderRadius: 12,
            }}
            onPress={() => {
              try {
                refreshToken();
                //Alert.alert(`${u}`);
              } catch (e) {
                console.log('Error', e);
                Alert.alert('Error in transacting');
              }
            }}>
            <Text>Refresh Token</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{
              padding: 28,
              marginTop: 24,
              backgroundColor: 'yellow',
              borderRadius: 12,
            }}
            onPress={() => {
              try {
                initializeTransaction('100');
                //Alert.alert(`${u}`);
              } catch (e) {
                console.log('Error', e);
                Alert.alert('Error in transacting');
              }
            }}>
            <Text>Transact Rs 100</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
