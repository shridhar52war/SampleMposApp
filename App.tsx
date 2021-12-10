/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
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
import { init } from 'react-native-mpos-wrapper';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
              //const result = await multiply(2, 3);
              try {
                const u = await init();
                Alert.alert(`${u}`);
              } catch (e) {
                console.log('Error', e);
              }
            }}>
            <Text>Click to Initialize MPOS SDK</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
