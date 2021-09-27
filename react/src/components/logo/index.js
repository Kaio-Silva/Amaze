import React from "react"

import { Link } from 'react-router-dom';
import { Container } from './styled'

export default function Logo(props){
    return(    
        <Container cor={props.cor} direction={props.direction} titulo={props.titulo}>
           <Link className="link" to="/home"><img  className="img-logohd" src="/assets/Images/BussolaVerde.png" alt=""/></Link>
           <Link className="link" to="/home"><div className="texto"> Amaze </div></Link>
        </Container>
    )
}
