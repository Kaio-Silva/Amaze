import { Container } from './styled'
import Logo from '../logo'
import { Link } from 'react-router-dom';
import { Pesquisa } from '../inputs/styled'

export default function Cabecalho(props){

    return(
  <Container cor={props.cor} titulo={props.titulo} tamanho={props.tamanho} input={props.input} home={props.home} contatenos={props.contatenos} 
             buscar={props.buscar} criar={props.criar} historico={props.historico} login={props.login} cadastrar={props.cadastrar} >
    <div className="cabecalho-hd">
        <Logo cor={props.cor} titulo={props.titulo} tamanho="medio"/> 
        <div className="descricao-cabecalhohd">
            <Pesquisa input={props.input} tamanho={props.tamanho}/>
            <div className="menubutt"><img src="/assets/Images/menubutt.svg" alt=""/></div>
            <Link className="link" to="/cadastro"><div className="elements-desc-cabhd7">Cadastrar-se</div></Link>
            <Link className="link" to="/HistoricoDenunc"><div className="elements-desc-cabhd5">Historico</div></Link>
            <Link className="link" to="/"><div className="elements-desc-cabhd1">Home</div></Link>
            <Link className="link" to="/*"><div className="elements-desc-cabhd2">Contate-nos</div></Link>
            <Link className="link" to="/Buscar"><div className="elements-desc-cabhd3">Buscar Região</div></Link>
            <Link className="link" to="/*"><div className="elements-desc-cabhd4">Criar Denuncia</div></Link>
            <div className="barraCabecalho"></div>
            <Link className="link" to="/Login"><div className="elements-desc-cabhd6">Log-in</div></Link>
        </div>

    </div>
</Container>
    )
}