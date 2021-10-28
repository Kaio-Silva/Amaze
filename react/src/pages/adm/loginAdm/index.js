import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../../components/commom/logo'
import { Padrao } from '../../../components/styled/inputs.js';
import { Button } from '../../../components/styled/botoes';
import { useState} from 'react';
import Api from '../../../services/api';
import { useHistory } from 'react-router';

const api = new Api()

export default function LoginAdm (props){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
 
    const nav = useHistory();
    
 
    const Inserir = async () => {
 
         let r = await api.USULogin(senha, email)
 
         if( r.erro ){
             nav.push('/Login')
         } else{
             nav.push('/')
         }
     }
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
                            <Padrao onChange={ e => setEmail(e.target.value)} placeholder="Insira seu email" tamanho="100%" />
                        </div>
                        <div className="Inputs">                        
                            <div className="Titulo">Senha</div>
                            <Padrao onChange={ e => setSenha(e.target.value)} className="senha" placeholder="Insira seu login" type="password" Type="senha" tamanho="100%" />
                        </div>
                        <Link  to="/adm"> 
                            <Button className="ajustarBotao" tamanho="grande" cor="azul"> Log in </Button>
                        </Link> 
                    </div>
                </div>
            </div>
        </Container>
    )
}
