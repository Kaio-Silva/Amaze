import React from 'react';
import { Container } from './styled.js'
import Cabecalho from '../../components/cabecalho'
import Mapa from '../../components/mapa'

export default function Map(props){
    return(
        <Container> 
            <Cabecalho cor="black" input="usar" tamanho=""  home="" historico="" contatenos="" buscar="" criar="usar" login="usar"/>
            <Mapa />
        </Container>
    )
}