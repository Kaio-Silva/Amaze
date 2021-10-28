import React, { useState } from 'react'
import { Padrao } from '../../components/styled/inputs.js';
import { Button } from '../../components/styled/botoes'
import { Container } from './styled.js';
import Cabecalho from '../../components/commom/cabecalho/index.js';
import Api from '../../services/api';


const api = new Api();

function EsqueceuSenha(props) {
  const[email,setEmail] = useState('')


  async function Inserir(){
   await api.Enviar(email)
 }

 
  return (
    <div className="container">
      <Cabecalho cor="black" titulo="block" input="" home="" contatenos="" buscar="" criar="" login="usar" historico="" cadastrar="usar" loginp="usar" cadastrop="usar" />
      <Container>
        <div className="conteudo">
          <div className="titulo"> Encontre sua conta </div>
          <hr/>
          <div className="alinharDesc">
            <div className="descricao"> Insira seu email para podermos te enviar uma notifiação para você receber a sua senha </div>
            <Padrao onChange={ e => setEmail(e.target.value) } className="ajustarInput" placeholder="Insira seu email" />
          </div>  
          <hr/>
          <div className="Botao"><Button onClick={Inserir}> Enviar </Button></div>
        </div>
      </Container>
    </div>
    
  );
}

export default EsqueceuSenha;
