
import React, { useEffect, useRef, useState } from 'react';
import { Container } from './styled.js'
import Api from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
const api = new Api()

export default function Usuario(props){
    const loading = useRef(null);

    async function DeletUsu(){
        loading.current.continuosStart();
        let f = await api.DELETEusu(props.id)
        toast.success('aiaiaia')
        props.func()
        loading.current.complete();
        
    }

    return(
        <Container>
            <ToastContainer/>
            <LoadingBar ref={loading}/>
            <div className="alinhandoInformacoes">
                <div className="informacoes">
                    <div className="texto"> <span> Nome: </span> {props.Nome} </div>
                    <div className="texto"> <span> Telefone: </span> {props.Telefone} </div>
                </div>
                <div className="informacoes">
                    <div className="texto"> <span> Email: </span> {props.Email} </div>
                    <div className="texto"> <span> Reportes: </span> {props.Report} </div>
                </div>
                <div className="alinhandoImg">
                    <div onClick={DeletUsu}><img  className="imagem cancel" src="/assets/Images/CancelarDenuncia3.png" alt=""/></div>
                    <img  className="imagem" src="/assets/Images/Aprovar3.png" alt=""/> 
                </div>
            </div>
        </Container>

    )
}

