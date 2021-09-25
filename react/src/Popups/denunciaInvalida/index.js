import { Container } from './styled'

export default function p2(){
    return(
        <Container>
        <div className="abox">
            <div className="cabecalho"><img src="/assets/images/Fechar 5.png" alt=""/></div>
            <div className="img"><img src="/assets/images/risco.png" alt=""/></div>
            <div className="titulo"> Achou essa denuncia inválida? </div>
            <div className="textaa"><textarea placeholder="Motivo do reporte"></textarea></div>
            <div className="botao"><button>Confirmar Reporte</button></div>
       </div>
     </Container>
    )
}  