import { Container } from './styled'
// import { useState } from 'react';

import Api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRef } from 'react'
  import { useHistory } from 'react-router';
import LoadingBar from 'react-top-loading-bar' 

const api = new Api();

export default function P3(props){
    const loading = useRef(null);
    
   const  navigation = useHistory();

    async function remover(){


        loading.current.continuousStart();
        let r = await api.deleteDENU(props.id)

        if(r.erro){
            toast.error(r.erro)
            loading.current.complete();
         }else{
            loading.current.complete();
            toast.success(`A denuncia foi removida com sucesso`)  
            props.function(props.id) 
   
        }
    }

    
    return(props.trigger) ?(
     
     <Container>
         <LoadingBar color='#f11946' ref={loading} />
        <div className="abox">
            <ToastContainer/>
            <div className="cabecalho"><button onClick={() => props.setTrigger(false)}><img src="/assets/images/xpreto.png" alt=""/></button></div>
            <div className="img"><img src="/assets/images/duvida.png" alt=""/></div>
            <div className="titulo"> Deseja exluir essa denúncia? </div>
            <div className="botoes">
                <button onClick={ () => props.setTrigger(false)}> Cancelar </button>
                <button onClick={remover}>Confirmar</button>
            </div>
            { props.children}
       </div>
    </Container>
        
    )   :"";
}  