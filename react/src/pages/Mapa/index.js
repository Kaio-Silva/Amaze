import React from 'react';
import { Container } from './styled.js'
import Cabecalho from '../../components/commom/cabecalho'
import Mapa from '../../components/commom/mapa'

export default function Map(props){

    return(       
          <Container> 
              <Cabecalho cor="black" tamanho=""  home="" historico="" contatenos="" buscar="" criar="usar" login="usar" loginp="usar" contatenosp="usar" histp="usar" cadastrop="usar" criarp="usar"/>
              <Mapa />
          </Container>
    )
}