import { Container } from './styled.js';
import Cabecalho from '../../components/cabecalho';


function Denuncias() {
    return(
        <Container>
        <Cabecalho/>
            <div className="conteudo">
                <div className="rua"> Rua José Bonifácio </div>
                <div className="usuario">
                    <div className="row">
                        <div className="informações">
                            <div className="autor A"> <div>Autor: </div> Yudji doido </div>
                            <div className="delito A"> <div>Delito: </div> Assalto </div>
                            <div className="avaliação A"> <img src="/assets/Images/aval.png"/> </div>
                            <div className="descriçãoA">
                                <div>Descrição: </div>
                                <div className="descricao">
                                    aiaiaiauiuiaiaiaiauiuiaiuiauiauiuaiauiauiujgdvhqwdvgqyuigdfqyufvbhaevfhQWEFVQWYeurfwyqegfwyegfuasegfuiasgfhsabvflshiILGBIYovdfilydv
                                </div>
                            </div>
                        </div>
                        <div className="Data"><div>Data:</div> 20/09/2021 </div>
                    </div>
                    <div className="botões">
                        <div className="botão1"> <button> Avaliar Denuncia </button> </div>
                        <div className="botão2"> <button> Reportar Denuncia </button> </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Denuncias;