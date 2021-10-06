import { Container } from './styled'

export default function Card(){
    return(
      <Container>
          <div className="nm"> Autor: <span> Kaique </span> </div>
          <div className="motivo">Motivo: <span> O que foi relatado não é coerente </span> </div>
      </Container>
    )
}


