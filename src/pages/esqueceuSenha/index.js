import React from 'react'

import { Container } from './styled.js';

function BuscarRegioes() {
  return (
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
    
  );
}

export default BuscarRegioes;
