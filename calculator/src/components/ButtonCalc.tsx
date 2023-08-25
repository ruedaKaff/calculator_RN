import React from 'react';
import {Text, View} from 'react-native';
import { styles } from '../theme/styles';
interface Props {
    texto: string;
    bColor?: string;
    ancho?: boolean;


}


export const ButtonCalc = ({ancho= false ,bColor='#2D2D2D',texto}:Props) => {


  return (

    <View style={{
        ...styles.button,
        backgroundColor: bColor,
        width: (ancho) ? 180 : 80
    }}
    >
      <Text style={{...styles.buttonText,

      color: (bColor=== '#9B9B9B'? 'black': 'white')
    
    }}>{texto}</Text>
    </View>

  );
};
