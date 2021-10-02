import { Container } from './styled'
import Logo from '../logo'
import { Link } from 'react-router-dom';
import { Pesquisa } from '../../styled/inputs.js'
import { useState } from 'react';
import Pop from '../../../Popups/menu'

export default function Cabecalho(props){
    const [po,setPo] = useState(false)
    return(
  <Container cor={props.cor} titulo={props.titulo} tamanho={props.tamanho} input={props.input} home={props.home} contatenos={props.contatenos} 
             buscar={props.buscar} criar={props.criar} historico={props.historico} login={props.login} cadastrar={props.cadastrar} background={props.background} >
    <div className="cabecalho-hd">

    <Pop trigger={po} setTrigger={setPo}   background="white" home={props.homep} login={props.loginp} contact={props.contatenosp} buscregion={props.buscarp} relatDenunc={props.relatp} removeUser={props.removep} histp={props.histp} cadastro={props.cadastrop} ></Pop>

        <Logo className="logo" cor={props.cor} titulo={props.titulo} tamanho="medio"/> 
        <div className="descricao-cabecalhohd"> 
            <Pesquisa input={props.input} tamanho={props.tamanho}/>
            <div className="menubutt">
                <button onClick={() => setPo(true)}> <img src="/assets/Images/menubutt.svg" alt=""/> </button>
            </div>
            <Link className="link" to="/cadastro"> <div className="elements-desc-cabhd7"> Cadastrar-se </div> </Link>
            <Link className="link" to="/HistoricoDenunc"><div className="elements-desc-cabhd5"> Historico </div> </Link>
            <Link className="link" to="/"> <div className="elements-desc-cabhd1"> Home </div> </Link>
            <Link className="link" to="/*"> <div className="elements-desc-cabhd2"> Contate-nos </div> </Link>
            <Link className="link" to="/Buscar"> <div className="elements-desc-cabhd3"> Buscar Região </div> </Link>
            <Link className="link" to="/*"> <div className="elements-desc-cabhd4"> Criar Denuncia </div> </Link>
            <div className="barraCabecalho"> </div>
            <Link className="link" to="/Login"> <div className="elements-desc-cabhd6"> Log-in </div> </Link>
        </div>

    </div>
</Container>
    )
}