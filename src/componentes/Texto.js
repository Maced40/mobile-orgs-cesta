import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) { 
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold') { //se tiver styles, verificamos, se não, simplesmente não verificamos
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal" //temos que declarar isso por conta das preferências de escolha de estilos pelo sistema
    },
    textoNegrito: {
        fontFamily: "MontserratBold", 
        fontWeight: "normal" 
    }
})