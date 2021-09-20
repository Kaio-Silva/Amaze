import React from 'react'

import { Container } from './styled.js';

function Cadastrar() {
  return (
    
    <Container>
          <div class="fundo">
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
                  <div class="titulo-nome">
                      <spam>Email</spam>
                  </div>
                  <div class="input">
                      <input placeholder="Insira seu E-mail"></input>
                  </div>
              </div>
          </div>
    </Container>
    
  );
}

export default Cadastrar;
