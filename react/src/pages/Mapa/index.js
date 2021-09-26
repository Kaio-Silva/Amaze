import React from 'react';
import { Container } from './styled.js'
import Cabecalho from '../../components/cabecalho'
import Mapa from '../../components/mapa'

export default function Map(props){
    return(
        <Container> 
            <Cabecalho cor="black"/>
            <Mapa />
        </Container>
    )
}