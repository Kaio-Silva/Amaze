import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../../components/commom/logo'
import { Padrao } from '../../../components/styled/inputs.js';
import { Button } from '../../../components/styled/botoes';

export default function LoginAdm(props){
    return(
        <Container>
            <Logo ambos="false" direction="column" cor="white" titulo="" tamanho="medio"/>
            <div className="BoxLogin">
                <div className="ConteudoAmaze">
                    <Logo direction="column" cor="white" titulo="block" tamanho="grande"/>
                    <div className="DescLogin">Faça sua segurança com a Amaze, se torne um de nos</div>
                </div>
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Log in Adm </div>
                    <div className="FormLogin">
                        <div className="Inputs">                        
                            <div className="Titulo">Email</div>
                            <Padrao placeholder="Insira seu email"/>
                        </div>
                        <div className="Inputs">                        
                            <div className="Titulo">Senha</div>
                            <Padrao className="senha" placeholder="Insira seu login" type="password" Type="senha"/>
                        </div>
                        <Link  to="/adm/realtorio"><Button className="ajustarBotao" tamanho="grande" cor="azul"> Log in </Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}


