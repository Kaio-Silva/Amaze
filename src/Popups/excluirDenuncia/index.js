import { Container } from './styled'

export default function p3(){
    return(
       
     <Container>
        <div className="abox">
            <div className="cabecalho"><img src="/assets/images/xpreto.png" alt=""/></div>
            <div className="img"><img src="/assets/images/duvida.png" alt=""/></div>
            <div className="titulo"> Deseja exluir essa denúncia? </div>
            <div className="botoes">
                <button>Cancelar</button>
                <button>Confirmar</button>
            </div>
       </div>
    </Container>
        
    )
}  