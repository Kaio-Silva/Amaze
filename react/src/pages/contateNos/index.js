import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/commom/logo'
import { Padrao } from '../../components/styled/inputs.js';
import { Button } from '../../components/styled/botoes';

export default function Contatnos(props){
    return(
        <Container>
            <Logo direction="row" cor="white" titulo="block" tamanho="grande"/>
            <div className="BoxLogin">
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Contate-nos </div>
                    <div className="FormLogin">
                        <div className="Inputs">                        
                            <Padrao placeholder="Nome Completo"/>
                        </div>
                        <div className="Inputs">                   
                            <Padrao placeholder="E-mail"/>
                        </div>
                        <div className="Inputs">                    
                            <Padrao placeholder="Telefone"/>
                        </div>
                        <div className="Inputs">                     
                            <Padrao placeholder="Mensagem" />
                        </div>
                        <Link  to="/Relatorio"><Button className="ajustarBotao" tamanho="medio" cor="0FA882"> Enviar </Button></Link>
                    </div>
                </div>
                <div className="ConteudoAmaze">
                    <div className="DescLogin">Informações</div>
                    
                </div>
            </div>
        </Container>
    )
}


