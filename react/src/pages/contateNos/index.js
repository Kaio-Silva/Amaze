import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/commom/logo'
import { Padrao, Textarea } from '../../components/styled/inputs.js';
import { Button } from '../../components/styled/botoes';

export default function Contatenos(props){
    return(
        <Container>
            
            <div className="Logo"><Logo cor="white" titulo="none" tamanho="grande"/></div>
            <div className="BoxLogin">
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Contate-nos </div>
                    <div className="FormLogin" >
                        <div className="Inputs">                        
                            <Padrao  placeholder="Nome" tamanho="100%" cor="verde"/> 
                            <div className="AlinhandoInputs">             
                                <Padrao  className="input" placeholder="E-mail" cor="verde"/>
                                <Padrao className="input"className="tamanho" placeholder="Telefone" cor="verde"/> 
                            </div>                     
                            <Textarea className="TextArea" placeholder="Mensagem" tamanho="100%" cor="verde"/>
                        </div>
                        <div className='botao'>
                        <Link  to="/"><Button className="ajustarBotao" tamanho="medio" cor="0FA882"> Enviar </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="ConteudoAmaze">
                    <div className="AlinharConteudo">    
                        <div className="DescLoginA">Informações</div>
                        <div className="Alinhar">
                            <img className="Imagem" src="/assets/images/Facebook 1.png" alt=""/>
                            <div className="Descricao"><span>Facebook:</span> Amaze </div>
                        </div>    
                        <div className="Alinhar">
                            <img className="Imagem" src="/assets/images/Local.svg" alt=""/>
                            <div className="Descricao"><span>Local:</span> Av. Coronel de Freitas Costa  463</div>
                        </div>
                        <div className="Alinhar">
                            <img className="Imagem" src="/assets/images/E-mail 1.png" alt=""/>
                            <div className="Descricao"><span>E-mail:</span> Amazenegocios@gmail.com</div>
                        </div>
                        <div className="Alinhar">
                            <img className="Imagem" src="/assets/images/Telefone 1.png" alt=""/>    
                            <div className="Descricao"><span>Contato:</span> +55 11 99999-9001</div>
                        </div> 
                    </div>          
                </div>
            </div>
        </Container>
    )
}


