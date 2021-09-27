import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../links/styled.js';


export default function LinkPages(props){
    return(
        <Container>
           <div> <Link to="/home"> Home </Link> </div>
           <div><Link to="/Buscar" > BuscarRegiões </Link> </div>
           <div><Link to="/EsqueceuSenha"> EsqueceuSenha </Link></div>
           <div><Link to="/HistoricoDenunc"> HistoricoDenunc </Link></div>
           <div><Link to="/cadastro"> Cadastro </Link></div>
           <div><Link to="/Login"> Login </Link></div>
           <div><Link to="/Relatorio"> Relatorio </Link></div>
           <div><Link to="/Remover"> Remover </Link></div>
           <div><Link to="/Denuncia"> Denuncia </Link></div>
           <div><Link to="/Mapa" > Mapa </Link></div>
           <div><Link to="/LoginAdm"> LoginAdm </Link></div>
           <div><Link to="/*" > NotFound </Link></div>
        </Container>
    )
}