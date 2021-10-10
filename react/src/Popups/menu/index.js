import { Container } from './styled'
import './styled'
import { Link } from 'react-router-dom';

export default function Menu(props){
    return(props.trigger) ?(
            <Container background={props.background}  home={props.home} login={props.login} contact={props.contact} buscregion={props.buscregion} relatDenunc={props.relatDenunc} removeUser={props.removeUser} historicop={props.histp} cadastro={props.cadastro} criar={props.criar} >
                <div className="abox">
                <div className="cab">
                    <div className="oi"><button onClick={() => props.setTrigger(false)}><img className ="img"src="/assets/images/xpreto.png" alt=""/></button></div>
                </div>

                <div className="conteudop">
                   <Link className="link" to="/"><div className="home">Home</div></Link>
                   <Link className="link" to="/Contatenos"><div className="contatnos">Contate-Nos</div></Link>
                   <Link className="link" to="/Buscar"> <div className="buscregion">Buscar Região</div></Link>
                   <Link className="link" to="/Login"> <div className="login">Login</div></Link>
                   <Link className="link" to="/adm/relatorio"> <div className="relatDenunc">Relatório de Denúncias</div></Link>
                   <Link className="link" to="/HistoricoDenunc"> <div className="hist">Histórico Denúncias</div></Link>
                   <Link className="link" to="/cadastro"> <div className="cadastro">Cadastrar-se</div></Link>
                   <Link className="link" to="/adm/remover"><div className="removeUser">Remover Usuário</div></Link>
                   <Link className="link" to="/Criar"><div className="criar">Criar Denúncia</div></Link>
                </div>


                
            </div>
        </Container>
    ):""
}

