import { Container } from './styled.js';
import Cabecalho from '../../components/cabecalho';
import { useState } from 'react';
import Popavalie from '../../Popups/avalieDenuncia/index'
import Popreport from '../../Popups/denunciaInvalida/index'

function Denuncias(props) {
    const[avalie, SetAvalie] = useState(false)
    const[report,SetReport] = useState(false)
    return(
        <Container>
        <Cabecalho  cor="" home="usar" contatenos="" buscar="usar" criar="" login="usar" historico=""/>
            <div className="conteudo">
                <div className="rua"> Rua José Bonifácio </div>
                <div className="usuario">
                    <div className="row">
                        <div className="informacoes">
                            <div className="autor A">
                                <div className="T b">Autor: </div> 
                                <div className="Autor c"> Yudji doido </div>
                            </div>
                            <div className="delito A"> 
                                <div className="T b">Delito: </div>
                                <div className="Delito c"> Assalto </div>
                            </div>
                            <div className="avaliacao"> <img src="/assets/Images/aval.png" alt="" /> </div>
                            <div className="Descricao">
                                <div className="desc b">Descrição: </div>
                                <div className="descricao c">
                                    aiaiaiauiuiaiaiaiauiuiaiuiauiauiuaiauiauiujgdvhqwdvgqyuigdf qyufvbhaevfhQWEFVQWYeurfwyqegfwyegfuasegfuiasgfhsabvflshiILGBIYovdfilydv
                                </div>
                            </div>
                        </div>
                        <div className="Data A">
                            <div className="T b">Data:</div>
                            <div className="data c"> 20/09/2021 </div>
                        </div>
                    </div>
                    <div className="botões">
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