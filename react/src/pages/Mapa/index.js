import React from 'react';
import { Container } from './styled.js'
import Cabecalho from '../../components/commom/cabecalho'
import Mapa from '../../components/commom/mapa'

export default function Map(props){
    return(
        <div>
         <Cabecalho cor="black" input="usar" tamanho=""  home="" historico="" contatenos="" buscar="" criar="usar" login="usar"/>
          <Container> 
            
            <div><Mapa /></div>
          </Container>
          </div>
        
    )
}