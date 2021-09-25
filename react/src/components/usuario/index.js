
import React from 'react';
import { Container } from './styled.js'

export default function usuario(){
    return(

        <Container>
            <div className="alinhandoInformacoes">
                <div className="informacoes">
                    <div className="texto"> <span> Nome: </span> Thiago Viana Menezes </div>
                    <div className="texto"> <span> Data: </span> 10/03/2005 </div>
                    <div className="texto"> <span> Telefone: </span> (11) 95845-1086 </div>
                </div>
                <div className="informacoes">
                    <div className="texto"> <span> Cadastro: </span> 14/08/2020 </div>
                    <div className="texto"> <span> Email: </span> vianathiago171@gmail.com </div>
                    <div className="texto"> <span> Reportes: </span> 8 </div>
                </div>
                <div className="alinhandoImg">
                    <img  className="imagem" src="/assets/Images/CancelarDenuncia3.png" alt=""/> 
                    <img  className="imagem" src="/assets/Images/Aprovar3.png" alt=""/> 
                </div>
            </div>
        </Container>

    )
}

