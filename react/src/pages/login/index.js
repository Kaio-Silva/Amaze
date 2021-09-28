import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/logo'
import { Padrao } from '../../components/inputs/styled';
import { Button } from '../../components/botoes/styled';

function Login (props){
    return(
        <Container>
            <div className="BoxLogin">
                <div className="ConteudoAmaze">
                    <Logo direction="column" cor="black" titulo="block" tamanho="grande"/>
                    <div className="DescLogin">Faça sua segurança com a Amaze, se torne um de nos</div>
                </div>
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Log in </div>
                    <div className="FormLogin">
                        <div className="Inputs">                        
                            <div className="Titulo">Email</div>
                            <Padrao placeholder="Insira seu email"/>
                        </div>
                        <div className="Inputs">                        
                            <div className="Titulo">Senha</div>
                            <Padrao className="senha" placeholder="Insira seu login" type="password" Type="senha"/>
                        </div>
                        <div className="alinhandoLinks">
                            <Link className="link" to="/EsqueceuSenha"> Esqueceu Senha </Link>
                            <Link className="link" to="/cadastro"> Cadastre-se </Link>
                        </div> 
                        <Link  to="/"><Button className="ajustarBotao" tamanho="grande"> Log in </Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export { Login }

