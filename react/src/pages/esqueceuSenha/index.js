import React from 'react'

import { Padrao } from '../../components/styled/inputs.js';

import { Container } from './styled.js';
import Cabecalho from '../../components/commom/cabecalho/index.js'

function BuscarRegioes(props) {
  return (
    <div className="container">
      <Cabecalho cor="black" titulo="block" input="" home="" contatenos="" buscar="" criar="" login="usar" historico="" cadastrar="usar" loginp="usar" cadastrop="usar" />
      <Container>
        <div className="conteudo">
          <div className="titulo"> Encontre sua conta </div>
          <hr/>
          <div className="alinharDesc">
            <div className="descricao"> Insira seu email para podermos te enviar uma notifiação para você receber a sua senha </div>
            <Padrao className="ajustarInput" placeholder="Insira seu email" />
          </div>  
          <hr/>
          <div className="button"><button> Enviar </button></div>
        </div>
      </Container>
    </div>
    
  );
}

export default BuscarRegioes;
