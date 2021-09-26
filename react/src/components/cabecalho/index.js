import { Container } from './styled'
import Logo from '../logo'

export default function Cabecalho(props){

    return(
  <Container cor={props.cor}>
    <div className="cabecalho-hd">
        <Logo cor={props.cor}/> 
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