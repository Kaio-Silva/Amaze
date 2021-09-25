import React from 'react';
import { Container } from './styled.js'
import Cabecalho from '../../components/cabecalho'
import Mapa from '../../components/mapa'

export default function Home(){
    return(
        <Container> 
            <Cabecalho/>
            <Mapa />
        </Container>
    )
}