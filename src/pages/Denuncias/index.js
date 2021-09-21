import { Container } from './styled.js';
import Cabeçalho from '../../components/cabecalho/index';


function Denuncias() {
    return(
        <Container>
            <Cabeçalho/>
            <div className="conteudo">
                <div className="rua"> Rua José Bonifácio </div>
                <div className="usuario">
                    <div className="informações">
                        <div className="autor"> <b>Autor:</b> Yudji doido </div>
                        <div className="delito"> <b>Delito:</b> Assalto </div>
                        <div className="avaliação"></div>
                        <div className="descrição"> <b>Descrição:</b> </div>
                        <div className="data"> <b>Data:</b> 20/09/2021 </div>
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