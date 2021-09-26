import { Container } from './styled'

export default function p3(props){
    return(props.trigger) ?(
       
     <Container>
        <div className="abox">
            <div className="cabecalho"><button onClick={() => props.setTrigger(false)}><img src="/assets/images/xpreto.png" alt=""/></button></div>
            <div className="img"><img src="/assets/images/duvida.png" alt=""/></div>
            <div className="titulo"> Deseja exluir essa denúncia? </div>
            <div className="botoes">
                <button>Cancelar</button>
                <button>Confirmar</button>
            </div>
            { props.children}
       </div>
    </Container>
        
    )   :"";
}  