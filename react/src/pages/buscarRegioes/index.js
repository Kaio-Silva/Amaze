import React from 'react'

import { Container } from './styled.js';

function BuscarRegioes() {
  return (
    <Container>
      <div className="Cabecalho-Reg">
        <div className="Logo-Reg">
          <img className="Bussola-Req" src="/assets/Images/BussolaPreta.png" alt=""/>
          <div className="Nome-Req"> Amaze </div>
        </div>
        <input className="Input-Reg" type="text"/>
      </div>
      <div className="Alinhando-Centro"> 
        <div className="Conteudo-Reg">
        <img className="Img-Req1" src="/assets/Images/Img-BuscarRegiões.png" alt=""/>
          <div className="Textos-Req">
            <div className="Titulo-Req"> Melhore a segurança do seu Bairro </div>
            <div className="Descricao-Req"> Junte-se a Amaze, ajude fazendo denuncias de locais perigosos, aumentando a segurança de seu bairro </div>
          </div>
          <img className="Img-Req2" src="/assets/Images/Img-BuscarRegiões.png" alt=""/>
        </div>
      </div>  
    </Container>
    
  );
}

export default BuscarRegioes;
