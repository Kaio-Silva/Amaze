
import React, { useEffect, useState } from 'react';
import { Container } from './styled.js'
import Api from "../../../services/api";
const api = new Api()

export default function Usuario(props){

    /*<div className="texto"> <span> Data: </span> {props.Data} </div>*/
    /*<div className="texto"> <span> Cadastro: </span> {props.Cadastro} </div>*/

    return(
        <Container>
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
                    <img  className="imagem cancel" src="/assets/Images/CancelarDenuncia3.png" alt=""/> 
                    <img  className="imagem" src="/assets/Images/Aprovar3.png" alt=""/> 
                </div>
            </div>
        </Container>

    )
}

