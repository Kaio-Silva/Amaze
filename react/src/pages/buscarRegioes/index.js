import React from 'react'
import { Pesquisa } from "../../components/inputs/styled";
import Logo from '../../components/logo/index.js';

import { Container } from './styled.js';

function BuscarRegioes(props) {
  return (
    <Container>
      <div className="Cabecalho-Reg">
        <Logo cor="black"/>
        <Pesquisa input="usar"/>
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
