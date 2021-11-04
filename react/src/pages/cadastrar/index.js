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

const api = new Api()


function Cadastrar(props) {
   const [nome,setNome] = useState('')
   const [email,setEmail] = useState('')
   const [telefone,setTelefone] = useState('')
   const [senha,setSenha] = useState('')
   const [concluir,setConcluir] = useState([])

   const navigation = useHistory();

   console.log(nome);
   console.log(email);
   console.log(telefone);
   console.log(senha);
   console.log(concluir);
   
   
   async function Inserir(){

      let a = await api.InserirUSU(nome, email, telefone, senha, concluir)
      setConcluir(a);

      if(a.erro){
        toast.error(a.erro)
      }else{
         toast.success('Usuário criado com sucesso.')
         navigation.push('/')
      }
   }

  return (
    <Container>
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
                    <Padrao onChange={ e => setTelefone(e.target.value)} className="padrao" placeholder="Insira seu telefone" tamanho="100%" />
                 </div>
                 <div className="Inputs">                        
                    <div className="Titulo">Senha</div>
                    <Padrao onChange={ e => setSenha(e.target.value)} className="padrao"  placeholder="Insira seu senha" tamanho="100%" />
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
