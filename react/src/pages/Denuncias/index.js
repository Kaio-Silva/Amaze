import { Container } from './styled.js';
import Cabecalho from '../../components/commom/cabecalho';
import { useState } from 'react';
import Popavalie from '../../Popups/avalieDenuncia/index'
import Popreport from '../../Popups/denunciaInvalida'

function Denuncias(props) {
    const[avalie, SetAvalie] = useState(false)
    const[report,SetReport] = useState(false)
    const[espec, setEspec] = useState(props.location.state)
    

   
    console.log(espec)
    return(
        <Container >
        <Cabecalho  cor="" home="usar" contatenos="" mapa="usar" criar="" login="usar" historico="" homep="usar" loginp="usar" mapap="usar"/>
            <div className="conteudo">
                <div className="rua"> {espec.ds_rua} </div>
                <div className="usuario">
                    <div className="row">
                        <div className="informacoes">
                            <div className="autor A">
                                <div className="T b">Autor: </div> 
                                <div className="Autor c"> {espec.id_usuario} </div>
                            </div>
                            <div className="delito A"> 
                                <div className="T b">Delito: </div>
                                <div className="Delito c"> {espec.ds_tipo_denuncia} </div>
                            </div>
                            <div className="avaliacao"> <img src="/assets/Images/aval.png" alt="" /> </div>
                            <div className="Descricao">
                                <div className="desc b">Descrição: </div>
                                <div className="descricao c">
                                    {espec.ds_ocorrencia}
                                </div>
                            </div>
                        </div>
                        <div className="Data A">
                            <div className="T b">Data:</div>
                            <div className="data c"> {espec.dt_denuncia} </div>
                        </div>
                    </div>
                    <div className="botoes">
                        <div className="botão1"> <button onClick={() => SetAvalie(true)}> Avaliar Denuncia </button> </div>
                        <div className="botão2"> <button onClick={() => SetReport(true)}> Reportar Denuncia </button> </div>
                    </div>
                </div>
            </div>
            <Popavalie bool={avalie} func={SetAvalie}></Popavalie>
            <Popreport bool={report} func={SetReport}></Popreport>
        </Container>
    )
}

export default Denuncias;