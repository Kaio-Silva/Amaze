import React from "react"

import { Container } from './styled'

export default function Logo(props){
    return(    
        <Container cor={props.cor} direction={props.direction} titulo={props.titulo}>
           <img  className="img-logohd" src="/assets/Images/BussolaVerde.png" alt=""/>
           <div className="texto"> Amaze </div>
        </Container>
    )
}

