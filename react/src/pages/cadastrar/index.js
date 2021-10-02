import React from 'react'

import Logo from '../../components/commom/logo/index.js';
import { Button } from '../../components/styled/botoes';
import { Link } from 'react-router-dom';

import { Padrao } from '../../components/styled/inputs.js';

import { Container } from './styled.js';

function Cadastrar(props) {
  return (
    <Container>
          <div className="ajustarLogo"><Logo cor="black" tamanho="grande"/></div>
            <div className="conteudo">
              <div className="cadastro-inputs">
                 <div className="TituloCadastro"> Cadastro </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Nome Completo</div>
                    <Padrao className="padrao" placeholder="Insira seu nome"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Email</div>
                    <Padrao className="padrao"  placeholder="Insira seu email"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Telefone</div>
                    <Padrao  className="padrao" placeholder="Insira seu telefone"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Região</div>
                    <Padrao className="padrao"  placeholder="Insira sua região"/>
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Senha</div>
                    <Padrao className="padrao"  placeholder="Insira seu senha"/>
                 </div>          
                  <div className="mae-botao">
                      <Link className="link" to="/Login"><Button className="ajustarBotao" cor=""> Concluir Cadastro </Button></Link>
                  </div>
              </div>
            </div>
    </Container>
  );
}

export default Cadastrar;
