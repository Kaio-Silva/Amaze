import React from 'react'

import Logo from '../../components/logo/index.js';

import { Container } from './styled.js';

function Cadastrar(props) {
  return (
    <Container>
              <Logo cor="black"/>
              <div class="cadastro-inputs">
                  <div class="titulo-dentro">
                      <spam>Cadastro</spam>
                  </div>
                  <div class="titulo-nome">
                      <spam>Nome Completo</spam>
                  </div>
                  <div class="input">
                      <input placeholder="Insira seu nome"></input>
                  </div>
                  <div class="titulo-nome" id="suba">
                      <spam>Email</spam>
                  </div>
                  <div class="input">
                      <input placeholder="Insira seu E-mail"></input>
                  </div>
                  <div class="titulo-nome" id="suba">
                      <spam>Telefone</spam>
                  </div>
                  <div class="input">
                      <input placeholder="Insira seu telefone"></input>
                  </div>
                  <div class="titulo-nome" id="suba">
                      <spam>Região</spam>
                  </div>
                  <div class="input">
                      <input placeholder="Insira sua região"></input>
                  </div>
                  <div class="titulo-nome" id="suba">
                      <spam>Senha</spam>
                  </div>
                  <div class="input">
                      <input placeholder="Insira sua senha"></input>
                  </div>
                  <div calss="mae-botao">
                        <button class="botao">Concluir Cadastro</button>
                  </div>
              </div>
    </Container>
  );
}

export default Cadastrar;
