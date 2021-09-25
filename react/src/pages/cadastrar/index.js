import React from 'react'

import { Container } from './styled.js';

function Cadastrar() {
  return (
    <Container>
              <div class="logo">
                <img className="Bussola" src="/assets/Images/BussolaPreta.png" alt=""/>
                <div class="titulo">
                    <spam>Amaze</spam>
                </div>
              </div>
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
