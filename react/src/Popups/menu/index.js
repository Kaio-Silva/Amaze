import { Container } from './styled'
import './styled'
import { Link } from 'react-router-dom';

export default function Menu(props){
    return(props.trigger) ?(
            <Container background={props.background} background1={props.background} home={props.home} login={props.login} contact={props.contact} buscregion={props.buscregion} relatDenunc={props.relatDenunc} removeUser={props.removeUser} >
                <div className="abox">
                <div className="cab">
                    <div className="oi"><button onClick={() => props.setTrigger(false)}><img className ="img"src="/assets/images/xpreto.png" alt=""/></button></div>
                </div>

                <div className="conteudo">
                   <Link className="link" to="/"><div className="home">Home</div></Link>
                   <Link className="link" to="/Contatnos"><div className="contatnos">Contate-Nos</div></Link>
                   <Link className="link" to="/Buscar"> <div className="buscregion">Buscar Regiao</div></Link>
                   <Link className="link" to="/Login"> <div className="login">Login</div></Link>
                   <Link className="link" to="/Relatorio"> <div className="relatDenunc">Relatório de Denúncias</div></Link>
                   <Link className="link" to="/"><div className="removeUser">Remover Usuário</div></Link>
                </div>


                
            </div>
        </Container>
    ):""
}

