import { Container } from './styled'
import { Link } from 'react-router-dom';
import Logo from '../../components/commom/logo'
import { Padrao, Textarea } from '../../components/styled/inputs.js';
import { Button } from '../../components/styled/botoes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar';

export default function Contatenos(props){
    // const [nome,setNome] = useState('')
    // const [email,setEmail] = useState('')
    // const [telefone,setTelefone] = useState('')
    // const [mensagem,setMensagem] = useState('')
  


    const form = useRef()
    const loading = useRef(null);


    //  function Validar(){
    //      if(document.getElementById('name').value === undefined   ||   document.getElementById('email').value === undefined   ||   document.getElementById('message').value === undefined)
    //      return toast.error('Todos os campos são obrigatórios!')
    //  }


    function SendMail(e){
        loading.current.continuousStart();
        
        e.preventDefault();
        //   Validar()
        emailjs.sendForm('service_lyber5y', 'template_b8wj9ac', form.current, 'user_KZW7Whxg6kdEPNT47G1xJ')
          .then((result) => {
              toast.success('Mensagem enviada com sucesso!')
              
          }, (error) => {
              toast.error(error.message)
          });
          form.current.reset();
          loading.current.complete(); 
    }

    
    return(
        <Container>
            <LoadingBar color='#f11946' ref={loading} />
            <ToastContainer/>
            <div className="Logo"><Logo cor="white" titulo="none" tamanho="grande"/></div>

            
            <div className="BoxLogin">
                <div className="ConteudoLogin">
                    <div className="TituloLogin"> Contate-nos </div>
                    <div className="FormLogin" >
                        <div className="Inputs"> 
                        <form ref={form}onSubmit={SendMail}>                       
                            <Padrao className="padrao"  placeholder="Nome" tamanho="100%" cor="verde" name="name" value=""/> 
                            <div className="AlinhandoInputs"> 
                                        
                                <Padrao className="input" required="required" placeholder="E-mail" cor="verde" name="email" value="" />
                                <Padrao className="input" required="required" placeholder="Telefone" cor="verde" /> 
                            </div>                     
                            <Textarea className="TextArea" required="required" placeholder="Mensagem" tamanho="100%" cor="verde"  name="message" value=""/>
                            </form>
                        </div>
                        <div className='botao'>
                        <Link  to="/"><Button onClick={SendMail}  className="ajustarBotao"  tamanho="medio" cor="0FA882"> Enviar </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="ConteudoAmaze">
                    <div className="AlinharConteudo">    
                        <div className="DescContate">Informações</div>
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


