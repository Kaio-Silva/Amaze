import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/logo'
import { Padrao } from '../../components/inputs/styled';
import { Button } from '../../components/botoes/styled';

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
                    
                    <div className="DescLogin">Informações</div>
                    <div className="DescLogin">Local: Av. Coronel de Freitas Costa  463</div>
                    <div className="DescLogin">E-mail: Amazenegocios@gmail.com</div>
                    <div className="DescLogin">Contato: +55 11 99999-9001</div>

                    <img className="facebook" src="/assets/images/" alt=""/>
                    
                </div>
            </div>
        </Container>
    )
}


