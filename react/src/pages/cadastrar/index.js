import React from 'react'

import Logo from '../../components/logo/index.js';
import { Link } from 'react-router-dom';

import { Padrao } from '../../components/inputs/styled.js';

import { Container } from './styled.js';

function Cadastrar(props) {
  return (
    <Container>
              <Logo cor="black" tamanho="grande"/>
              <div class="cadastro-inputs">
                 <div className="Inputs">                        
                    <div className="Titulo">Nome Completo</div>
                    <Padrao placeholder="Insira seu nome"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Email</div>
                    <Padrao placeholder="Insira seu email"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Telefone</div>
                    <Padrao placeholder="Insira seu telefone"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Região</div>
                    <Padrao placeholder="Insira sua região"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Senha</div>
                    <Padrao placeholder="Insira seu senha"/>
                 </div>          
                  <div calss="mae-botao">
                      <Link className="link" to="/Login"><button class="botao">Concluir Cadastro</button></Link>
                  </div>
              </div>
    </Container>
  );
}

export default Cadastrar;
