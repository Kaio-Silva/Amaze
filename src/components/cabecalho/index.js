import react from 'react'
import { Container } from './styled'

export default function cabecalho(){
    return(
  <Container>
    <div className="cabecalho-hd">

        <div className="logo-cabecalhohd">
           <div className="img-logohd">  <img src="/assets/Images/BussolaVerde.png" alt=""/>   </div>
           <div className="escrita-logohd">Amaze</div>
        </div>
        <div className="descricao-cabecalhohd">
        <div className="menubutt"><img src="/assets/Images/menubutt.svg" alt=""/></div>
            <div className="elements-desc-cabhd">Home</div>
            <div className="elements-desc-cabhd">Contate-nos</div>
            <div className="elements-desc-cabhd">Buscar Região</div>
            <div className="barrahd"></div>
            <div className="elements-desc-cabhd">Log-in</div>
        </div>

    </div>
</Container>
    )
}