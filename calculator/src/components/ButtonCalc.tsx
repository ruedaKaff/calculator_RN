import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../theme/styles';
interface Props {
    texto: string;
    bColor?: string;
    ancho?: boolean;
    action: (numberText:string)=> void;


}


export const ButtonCalc = ({action ,ancho= false ,bColor='#2D2D2D',texto}: Props) => {


  return (
    <TouchableOpacity
    onPress={() => action(texto)}
    >
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
    </TouchableOpacity>

  );
};
