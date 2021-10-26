import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/commom/logo'
import { Padrao } from '../../components/styled/inputs.js';
import { Button } from '../../components/styled/botoes.js';
import { useState } from 'react';

function Login (props){

   const [email,setEmail] = useState('')
   const [senha,setSenha] = useState('')
   const [esqueceuSenha,setEsqueceuSenha]= useState('')
   const [login,setLogin] = useState([])


   console.log(email);
   console.log(esqueceuSenha);
   console.log(senha);
   console.log(login);
   
    return(
        <Container>
            <Logo ambos="false" direction="column" cor="black" titulo="" tamanho="medio"/>
            <div className="BoxLogin">
                <div className="ConteudoAmaze">
                    <Logo direction="column" cor="black" titulo="" tamanho="grande"/>
                    <div className="DescLogin">Faça sua segurança com a Amaze, se torne um de nos</div>
                </div>
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Log in </div>
                    <div className="FormLogin">
                        <div className="Inputs">                        
                            <div className="Titulo">Email</div>
                            <Padrao onChange={ e => setEmail(e.target.value)} className="Padrao" placeholder="Insira seu email" tamanho="100%"/>
                        </div>
                        <div className="Inputs">                        
                            <div className="Titulo">Senha</div>
                            <Padrao onChange={ e => setSenha(e.target.value)} className="senha" placeholder="Insira seu login" type="password" Type="senha" tamanho="100%"/>
                        </div>
                        <div className="alinhandoLinks">
                            <Link className="link" to="/EsqueceuSenha"> Esqueceu a Senha? </Link>
                            <Link className="link" to="/cadastro"> Cadastre-se </Link>
                        </div> 
                        <Link  to="/"><Button className="ajustarBotao" tamanho="grande" cor="verde"> Log in </Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export { Login }

