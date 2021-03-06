import { Container } from './styled'
import Logo from '../logo'
import { Link } from 'react-router-dom';
import { Pesquisa } from '../../styled/inputs.js'
import { useState, useEffect } from 'react';
import Pop from '../../../Popups/menu'
import Criar from '../../../Popups/criarDenunc'
import Cookies from 'js-cookie'
import Api from '../../../services/api.js'

const api = new Api();

export default function Cabecalho(props){
    const [po,setPo] = useState(false)
    const [cri, SetCri] = useState(false)
    const [x, setX] = useState('')

   

    function sair(){
        Cookies.remove('Idusu') 
        setX('') 
    }

    useEffect(() =>{ 
        let idu = Cookies.get('Idusu')

        async function Usu(){
            let r = await api.GetUSU(idu);
            setX(r);
        }
         
        Usu()
    },[x])

    return(
  <Container cor={props.cor} titulo={props.titulo} tamanho={props.tamanho} input={props.input} home={props.home} contatenos={props.contatenos} 
             mapa={props.mapa} criar={props.criar} historico={props.historico} login={props.login} cadastrar={props.cadastrar} background={props.background} >
    <div className="cabecalho-hd">

    <Pop trigger={po} setTrigger={setPo}   background="white" home={props.homep} login={props.loginp} contact={props.contatenosp} mapa={props.mapa} relatDenunc={props.relatp} removeUser={props.removep} histp={props.histp} cadastro={props.cadastrop} criar={props.criarp} ></Pop>
    <Criar value={cri} func={SetCri}/>
        <Logo className="logo" cor={props.cor} titulo={props.titulo} tamanho="medio"/> 
        <div className="descricao-cabecalhohd"> 
            <Pesquisa input={props.input} tamanho={props.tamanho}/>
            <div className="menubutt">
                <button onClick={() => setPo(true)}> <img src="/assets/Images/menubutt.svg" alt=""/> </button>
            </div>
            <Link className="link" to="/cadastro"> <div className="elements-desc-cabhd7"> Cadastrar-se </div> </Link>
            <Link className="link" to="/HistoricoDenunc"><div className="elements-desc-cabhd5"> Hist??rico </div> </Link>
            <Link className="link" to="/"> <div className="elements-desc-cabhd1"> Home </div> </Link>
            <Link className="link" to="/Contatenos"> <div className="elements-desc-cabhd2"> Contate-nos </div> </Link>
            <Link className="link" to="/Mapa"> <div className="elements-desc-cabhd3"> Mapa </div> </Link>
            <div className="but" ><button onClick={() =>  SetCri(true)}><div className="elements-desc-cabhd4"> Criar Denuncia </div></button></div>
            <div className="barraCabecalho"> </div>
            {Cookies.get('Idusu') === undefined ?(
                <Link className="link" to="/Login"> <div className="elements-desc-cabhd6"> Log-in </div> </Link>
            ) :(
                <div className="alinhar">
                    <div className="nome">{x}</div>
                    <img onClick={sair} className="sair" src={props.cor === "white" ? "/assets/Images/Sair3.svg"
                                                                                             : props.cor === "black" ? "/assets/Images/Sair2.svg"
                                                                                                                     : "/assets/Images/Sair.svg"} alt=""/>
                </div>
            ) }
        </div>

    </div>
</Container>
    )
}