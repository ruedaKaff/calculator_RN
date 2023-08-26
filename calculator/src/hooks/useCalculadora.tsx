import { useRef, useState } from "react";

enum Operadores {
    sumar,restar,multiplicar,dividir
}
export const useCalculadora = () => {

    const [number, setNumber] = useState('100');
    const [numberBefore, setNumberBefore] = useState('0');
    const lastOpe = useRef<Operadores>()
  
    const clean = () => {
      setNumber('0');
      setNumberBefore('0');
    };
  
    const buildNumber = (numberText: string) => {
      //Do not accept '..'
      if (number.includes('.') && numberText === '.') return;
  
      if (number.startsWith('0') || number.startsWith('-0')) {
        //punto decimal
        if (numberText === '.') {
          setNumber(number + numberText);
        } else if (numberText === '0' && number.includes('.')) {
          setNumber(number + numberText);
        } else if (numberText != '0' && !number.includes('.')) {
          setNumber(numberText);
        }
        // evitar 00000.0
        else if (numberText === '0' && !number.includes('.')) {
          setNumber(number);
        } else {
          setNumber(number + numberText);
        }
        //evaluar si es otro 0 y hay un punto
      } else {
        setNumber(number + numberText);
      }
    };
    const plusMinus = () => {
      if (number.includes('-')) {
        setNumber(number.replace('-', ''));
      } else {
        setNumber('-' + number);
      }
    };
  
    const changeValues =() => {
      if (number.endsWith('.'))
      {
          setNumberBefore(number.slice(0,-1));
      }
      else {
          setNumberBefore(number);
      }
       
       setNumber('0')
    }
  
    const delNumber = () => {
      let negativo = '';
      let currentNumber = number;
  
      if (number.includes('-')) {
        negativo = '-';
        currentNumber = number.substring(1);
      }
  
      if (currentNumber.length > 1) {
        setNumber(negativo + currentNumber.slice(0, -1));
      } else {
        setNumber('0');
      }
    };
  
    const btnDividir = ()=>  {
          changeValues();
          lastOpe.current = Operadores.dividir
    }
    
    const btnMultiplicar = ()=>  {
          changeValues();
          lastOpe.current = Operadores.multiplicar
    }
    
    const btnRestar = ()=>  {
          changeValues();
          lastOpe.current = Operadores.restar
    }
    
    const btnSumar = ()=>  {
          changeValues();
          lastOpe.current = Operadores.sumar
    }
    const calculate = ()=>{
      const numb1 =Number(number); 
      const numb2 =Number(numberBefore); 
  
      switch (lastOpe.current) {
          case Operadores.sumar:
              setNumber(`${numb1 + numb2 }`);
              
              break;
          case Operadores.restar:
              setNumber(`${numb2 - numb1 }`);
              
              break;
          case Operadores.dividir:
              setNumber(`${numb2 / numb1 }`);
              
              break;
          case Operadores.multiplicar:
              setNumber(`${numb1 * numb2 }`);
              
              break;
      }
      setNumberBefore('0')
  
    }
    return {
        numberBefore,
        number,
        clean,
        plusMinus,
        delNumber,
        btnDividir,
        buildNumber,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calculate,

    }

}
