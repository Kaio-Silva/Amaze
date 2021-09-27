import React from 'react'

import { Container } from './styled.js';
import Cabecalho from '../../components/cabecalho/index'

function BuscarRegioes(props) {
  return (
    <div className="container">
      <Cabecalho cor="black" titulo="block" input="" home="" contatenos="" buscar="" criar="" login="usar" historico="" cadastrar="usar"/>
      <Container>
        <div className="conteudo">
          <div className="titulo"> Encontre sua conta </div>
          <hr/>
          <div className="descricao"> Insira seu numero para podermos te enviar um SMS com sua senha </div>
          <input type="text" placeholder="Insira seu numero"/>
          <hr/>
          <div className="button"><button> Enviar </button></div>
        </div>
      </Container>
    </div>
    
  );
}

export default BuscarRegioes;
