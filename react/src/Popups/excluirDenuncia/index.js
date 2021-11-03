import { Container } from './styled'
// import { useState } from 'react';

import Api from '../../services/api';

const api = new Api();

export default function p3(props){


    async function remover(){
        let r = await api.deleteDENU(props.id)

        if(r.erro)
            alert(r.erro)
        else
            alert(`A denuncia foi removida com sucesso`)
            props.setTrigger(false)
            
    }

    return(props.trigger) ?(
     
     <Container>
        <div className="abox">
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