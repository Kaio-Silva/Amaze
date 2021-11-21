import React from 'react'
import { useHistory } from 'react-router';
import Logo from '../../components/commom/logo/index.js';
import { Button } from '../../components/styled/botoes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Padrao } from '../../components/styled/inputs.js';
import { Container } from './styled.js';
import { useState } from 'react';
import Api from '../../services/api.js';
import Mask from '../../components/commom/Mask/MaskedInput'
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Cookies from 'js-cookie';

const api = new Api()


function Cadastrar(props) {
   const [nome,setNome] = useState('')
   const [email,setEmail] = useState('')
   const [telefone,setTelefone] = useState('')
   const [senha,setSenha] = useState('')
   const [concluir,setConcluir] = useState([])

   const navigation = useHistory();
   const loading = useRef(null);

   async function Id(){
      let r = await api.USUemail(email)
      let idusu = r.idusu
      console.log(idusu)
      Cookies.set('Idusu', idusu, { expires: 7 })
      return r.data;
    }

   const logar = async () => {
   
      loading.current.continuousStart();
  
          let r = await api.USULogin(senha, email)
          if( r.erro ){
              toast.error(r.erro)
              navigation.push('/Login')
              loading.current.complete();   
          } else{
              Id()
              setTimeout(() => navigation.push('/'), 2000);
          }
   }
   
   
   async function Inserir(){
     loading.current.continuousStart();

      let a = await api.InserirUSU(nome, email, telefone, senha, concluir)
      setConcluir(a);

      if(a.erro){
        toast.error(a.erro)
        loading.current.complete();
      }else{
         setTimeout  (() => navigation.push('/'), 2000)
         toast.success('Usuário criado com sucesso.')
         loading.current.complete();  
      }

      await logar()
   }


  return (
    <Container>
       <LoadingBar color='#f11946' ref={loading} />
          <div className="ajustarLogo"><Logo cor="black" tamanho="grande"/></div>
          <ToastContainer/>
            <div className="conteudo">
              <div className="cadastro-inputs">
                 <div className="TituloCadastro"> Cadastro </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Nome Completo</div>
                    <Padrao onChange={ e => setNome(e.target.value)} className="padrao" placeholder="Insira seu nome"  tamanho="100%" />
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Email</div>
                    <Padrao onChange={ e => setEmail(e.target.value)} className="padrao"  placeholder="Insira seu email" tamanho="100%" />
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Telefone</div>
                    <Mask onChange={ e => setTelefone(e.target.value)} className="padrao" placeholder="Insira seu telefone" tamanho="100%" />
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Senha</div>
                    <Padrao onChange={ e => setSenha(e.target.value)} className="padrao"  placeholder="Insira seu senha" tamanho="100%" type="password" />
                 </div>          
                  <div className="mae-botao">
                      {/* <Link className="link" to="/Login"> */}
                         <Button className="ajustarBotao" onClick={Inserir}  cor=""> Concluir Cadastro </Button>
                         {/* </Link> */}
                  </div>
              </div>
            </div>
    </Container>
  );
}


export default Cadastrar;
