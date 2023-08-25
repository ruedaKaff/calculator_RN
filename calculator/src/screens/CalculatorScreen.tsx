import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/styles';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}> 1,500.00</Text>
      <Text style={styles.resultado}> 1,500.00</Text>
        {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc bColor={'#9B9B9B'} texto="C" />
        <ButtonCalc bColor={'#9B9B9B'} texto="+/-" />
        <ButtonCalc bColor={'#9B9B9B'} texto="del" />
        <ButtonCalc bColor={'#FF9427'} texto="/" />
      </View>
        {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="7" />
        <ButtonCalc texto="8" />
        <ButtonCalc texto="9" />
        <ButtonCalc bColor={'#FF9427'} texto="X" />
      </View>
        {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="4" />
        <ButtonCalc texto="5" />
        <ButtonCalc texto="6" />
        <ButtonCalc bColor={'#FF9427'} texto="-" />
      </View>
        {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="1" />
        <ButtonCalc texto="2" />
        <ButtonCalc texto="3" />
        <ButtonCalc bColor={'#FF9427'} texto="+" />
      </View>
        {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc ancho texto="0" />
        <ButtonCalc texto="." />
        <ButtonCalc bColor={'#FF9427'} texto="=" />
      </View>

    </View>
  );
};
