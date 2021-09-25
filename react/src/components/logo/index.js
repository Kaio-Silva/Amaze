import React from "react"

import { Container } from './styled'

export default function Logo(){
    return(    
        <Container>
           <img className="img-logohd" src="/assets/Images/BussolaVerde.png" alt=""/>
           <div className="texto"> Amaze </div>
        </Container>
    )
}

