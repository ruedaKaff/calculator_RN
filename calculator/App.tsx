import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {styles} from './src/theme/styles';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
      backgroundColor= '#000000'
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
