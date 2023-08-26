import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/styles';
import {ButtonCalc} from '../components/ButtonCalc';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculatorScreen = () => {

    const { numberBefore,
        number,
        clean,
        plusMinus,
        delNumber,
        btnDividir,
        buildNumber,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calculate, } =useCalculadora();
  

  return (
    <View style={styles.calculatorContainer}>
        {
            (numberBefore !== '0' ) && (<Text style={styles.smallResult}>{numberBefore}</Text>)
        }
    
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {' '}
        {number}
      </Text>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc bColor={'#9B9B9B'} action={clean} texto="C" />
        <ButtonCalc bColor={'#9B9B9B'} action={plusMinus} texto="+/-" />
        <ButtonCalc bColor={'#9B9B9B'} action={delNumber} texto="del" />
        <ButtonCalc bColor={'#FF9427'} action={btnDividir} texto="/" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="7" action={buildNumber} />
        <ButtonCalc texto="8" action={buildNumber} />
        <ButtonCalc texto="9" action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={btnMultiplicar} texto="X" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="4" action={buildNumber} />
        <ButtonCalc texto="5" action={buildNumber} />
        <ButtonCalc texto="6" action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={btnRestar} texto="-" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="1" action={buildNumber} />
        <ButtonCalc texto="2" action={buildNumber} />
        <ButtonCalc texto="3" action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={btnSumar} texto="+" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc ancho texto="0" action={buildNumber} />
        <ButtonCalc texto="." action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={calculate} texto="=" />
      </View>
    </View>
  );
};
