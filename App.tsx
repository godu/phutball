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
import {StyleSheet, View, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Board} from './src/Board';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={[styles.body, styles.sectionContainer]}>
        <Board />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    width: '100%',
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
