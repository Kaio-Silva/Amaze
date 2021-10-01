import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/logo'
import { Padrao } from '../../components/inputs/styled';
import { Button } from '../../components/botoes/styled';

export default function Contatnos(props){
    return(
        <Container>
            <Logo ambos="false"  cor="white" titulo="" tamanho="medio"/>
            <div className="BoxLogin">
                <div className="ConteudoAmaze">
                    <Logo direction="column" cor="white" titulo="block" tamanho="grande"/>
                    <div className="DescLogin">Faça sua segurança com a Amaze, se torne um de nos</div>
                </div>
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Contate-nos </div>
                    <div className="FormLogin">
                        <div className="Inputs">                        
                            <div className="Titulo">Email</div>
                            <Padrao placeholder="Insira seu email"/>
                        </div>
                        <div className="Inputs">                        
                            <div className="Titulo">Senha</div>
                            <Padrao className="senha" placeholder="Insira seu login" type="password" Type="senha"/>
                        </div>
                        <Link  to="/Relatorio"><Button className="ajustarBotao" tamanho="medio" cor="0FA882"> Enviar </Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}


