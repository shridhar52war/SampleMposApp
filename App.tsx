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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log('Registering the events...');
    MposWrapperEmitter?.addListener('RefreshToken', data => {
      console.log('refreshToken Listener:', JSON.stringify(data));
    });
    MposWrapperEmitter?.addListener('TransactionResult', data => {
      console.log('TransactionResult Listener:', JSON.stringify(data));
    });
    MposWrapperEmitter?.addListener('TransactionUIEvent', data => {
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
                const u = await init();
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
            onPress={async () => {
              try {
                await refreshToken((d, a) => {
                  console.log('refreshToken callback', d);
                });
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
            onPress={async () => {
              try {
                await initializeTransaction((d, a) => {
                  console.log('initializeTransaction callback', d);
                });
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
