import { Container } from './styled'
import Logo from '../logo'
import { Pesquisa } from '../inputs/styled'

export default function Cabecalho(props){

    return(
  <Container cor={props.cor} titulo={props.titulo} tamanho={props.tamanho} input={props.input} home={props.home} contatenos={props.contatenos} 
             buscar={props.buscar} criar={props.criar} historico={props.historico} login={props.login} cadastrar={props.cadastrar}>
    <div className="cabecalho-hd">
        <Logo cor={props.cor} titulo={props.titulo}/> 
        <div className="descricao-cabecalhohd">
            <Pesquisa input={props.input} tamanho={props.tamanho}/>
            <div className="menubutt"><img src="/assets/Images/menubutt.svg" alt=""/></div>
            <div className="elements-desc-cabhd7">Cadastrar-se</div>
            <div className="elements-desc-cabhd5">Historico</div>
            <div className="elements-desc-cabhd1">Home</div>
            <div className="elements-desc-cabhd2">Contate-nos</div>
            <div className="elements-desc-cabhd3">Buscar Região</div>
            <div className="elements-desc-cabhd4">Criar Denuncia</div>
            <div className="barrahd"></div>
            <div className="elements-desc-cabhd6">Log-in</div>
        </div>

    </div>
</Container>
    )
}