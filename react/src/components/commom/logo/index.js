import React from "react"

import { Link } from 'react-router-dom';
import { Container } from './styled'

export default function Logo(props){
    return(    
        <Container cor={props.cor} direction={props.direction} titulo={props.titulo} tamanho={props.tamanho} ambos={props.ambos} tela={props.tela}>
           <Link className="link" to={props.home === "true" ? "/adm" : "/"} ><img  className="img-logohd" src="/assets/Images/BussolaVerde.png" alt=""/></Link>
           <Link className="link" to= {props.home === "true" ? "/adm" : "/"} ><div className="texto"> Amaze </div></Link>
        </Container>
    )
}   
