import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/commom/logo'
import { Padrao } from '../../components/styled/inputs.js';
import { Button } from '../../components/styled/botoes';

export default function Contatenos(props){
    return(
        <Container>
            
            <div className="cabecalho"><Logo direction="center" cor="white" titulo="block" tamanho="grande"/></div>
            <div className="BoxLogin">
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Contate-nos </div>
                    <div className="FormLogin" >
                        <div className="Inputs">                        
                            <Padrao  placeholder="Nome Completo"  />
                        </div>
                        <div className="Inputs">                   
                            <Padrao placeholder="E-mail" />
                        </div>
                        <div className="Inputs">                    
                            <Padrao placeholder="Telefone"/>
                        </div>
                        <div className="Inputs">                     
                            <Padrao placeholder="Mensagem" />
                        </div>
                        <div className='botao'>
                        <Link  to="/Relatorio"><Button className="ajustarBotao" tamanho="medio" cor="0FA882"> Enviar </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="ConteudoAmaze">
                    
                    <div className="DescLoginA">Informações</div>
                    <div className="DescLoginB">Local: Av. Coronel de Freitas Costa  463</div>
                    <div className="DescLoginC">E-mail: Amazenegocios@gmail.com</div>
                    <div className="DescLoginD">Contato: +55 11 99999-9001</div>

                    <div className="imagens">
                    <img className="E-mail" src="/assets/images/E-mail 1.png" alt=""/>
                    <img className="Facebook" src="/assets/images/Facebook 1.png" alt=""/>
                    <img className="Telefone" src="/assets/images/Telefone 1.png" alt=""/>
                    </div>
                    
                </div>
            </div>
        </Container>
    )
}


