import { Container } from './styled'


export default function p1(){
    return(
        <Container>
           <div className="abox">
               <div className="cabecalho"><img src="/assets/images/Fechar 5.png" alt=""/></div>
               <div className="img"><img src="/assets/images/estrelinha.png" alt=""/></div>
               <div className="titulo"> Avalie esta Denúncia</div>
               <div className="aval"><img src="/assets/images/aval.png" alt=""/></div>
               <div className="botao"><button>Confirmar Avaliação</button></div>
          </div>
        </Container>
    )
}  