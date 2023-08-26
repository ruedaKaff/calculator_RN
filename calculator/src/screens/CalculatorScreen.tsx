import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/styles';
import {ButtonCalc} from '../components/ButtonCalc';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('100');
  const [numberBefore, setNumberBefore] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (numberText: string) => {
    //Do not accept '..'
    if (number.includes('.') && numberText==='.') return;

    if( number.startsWith('0') || number.startsWith('-0') ) {
    //punto decimal
        if (numberText ===('.')) {
            setNumber(number + numberText);

        }else if( numberText === '0' && number.includes('.')){
            setNumber(number + numberText)
        }else if (numberText != '0' && !number.includes('.') ){
            setNumber(numberText)
        }
        // evitar 00000.0
        else if (numberText ==='0' && !number.includes('.'))
        {
            setNumber(number)
        }else {
            setNumber (number + numberText)
        }
    //evaluar si es otro 0 y hay un punto
    }
    else{
        setNumber(number + numberText);
    }
    
  };
  const plusMinus = () => {
    if (number.includes('-')) {
        setNumber (number.replace('-',''));
    }
    else{
        setNumber ('-' + number);
    } 

  };

  const delNumber = () => {

    let negativo = '';
    let currentNumber = number;

    if (number.includes('-')){
        negativo = '-';
        currentNumber = number.substring(1);
    }

    if (currentNumber.length > 1 ){
        setNumber(negativo + currentNumber.slice(0,-1))
    }
    else{
        setNumber('0');
    }
    

    }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{numberBefore}</Text>
      <Text style={styles.resultado} 
      numberOfLines={1} 
      adjustsFontSizeToFit
      >
        {' '}
        {number}
      </Text>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc bColor={'#9B9B9B'} action={clean} texto="C" />
        <ButtonCalc bColor={'#9B9B9B'} action={plusMinus} texto="+/-" />
        <ButtonCalc bColor={'#9B9B9B'} action={delNumber} texto="del" />
        <ButtonCalc bColor={'#FF9427'} action={clean} texto="/" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="7" action={buildNumber} />
        <ButtonCalc texto="8" action={buildNumber} />
        <ButtonCalc texto="9" action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={clean} texto="X" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="4" action={buildNumber} />
        <ButtonCalc texto="5" action={buildNumber} />
        <ButtonCalc texto="6" action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={clean} texto="-" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc texto="1" action={buildNumber} />
        <ButtonCalc texto="2" action={buildNumber} />
        <ButtonCalc texto="3" action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={clean} texto="+" />
      </View>
      {/* Buttons row */}
      <View style={styles.row}>
        <ButtonCalc ancho texto="0" action={buildNumber} />
        <ButtonCalc texto="." action={buildNumber} />
        <ButtonCalc bColor={'#FF9427'} action={clean} texto="=" />
      </View>
    </View>
  );
};
