import { Container } from './styled.js';
import Cabecalho from '../../components/commom/cabecalho';
import { useState } from 'react';
import Popavalie from '../../Popups/avalieDenuncia/index'
import Popreport from '../../Popups/denunciaInvalida'
import Api from '../../services/api.js';
import { useEffect } from 'react';

const api = new Api();

function Denuncias(props) {
    const[avalie, SetAvalie] = useState(false)
    const[report,SetReport] = useState(false)
    const[espec, setEspec] = useState(props.location.state)
    const[x, setX] = useState('')


    useEffect(() =>{
        async function Usu(){
            let r = await api.GetUSU(espec.id_usuario);
            setX(r);
        }
        Usu()
    },[])

    console.log(espec.qtd_avaliacao)

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
                                <div className="Autor c"> {x} </div>
                            </div>
                            <div className="delito A"> 
                                <div className="T b">Delito: </div>
                                <div className="Delito c"> {espec.ds_tipo_denuncia} </div>
                            </div>
                            <div className="avaliacao"> <img src={espec.qtd_avaliacao >= 1 ? "/assets/Images/ESTRELA-1.svg" : 
                                                                                             espec.qtd_avaliacao >= 2 ? "/assets/Images/ESTRELA-2.svg" :
                                                                                                                      espec.qtd_avaliacao >= 3 ? "/assets/Images/ESTRELA-3.svg" :
                                                                                                                                                  espec.qtd_avaliacao >= 4 ? "/assets/Images/ESTRELA-4.svg" :
                                                                                                                                                                             espec.qtd_avaliacao >= 5 ? "/assets/Images/ESTRELA-5.svg" : "/assets/Images/ESTRELA-0.svg"} alt="" /> </div>
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
            <Popavalie item={espec} bool={avalie} func={SetAvalie}></Popavalie>
            <Popreport bool={report} func={SetReport}></Popreport>
        </Container>
    )
}

export default Denuncias;