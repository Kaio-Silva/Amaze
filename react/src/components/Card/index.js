import { Card } from './styled';

export default function denuncias() {
    return (
        <Card>
            <div className="info1">
                <div className="cont i"> <div className="b">Data:</div> 14/08/2021 </div>
                <div className="cont i"> <div className="b">Região:</div> Parque Alto do Rio Bonito </div>
                <div className="descriçao i"> <div className="b">Descrição:</div> Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa </div>
                <div className="imagens">
                    <button className="botoes"> <img src="/assets/Images/CancelarDenuncia3.png" alt=""/> </button>
                    <button className="botoes"> <img src="/assets/Images/Aprovar3.png" alt=""/> </button>
                </div>
            </div>
        </Card>
    )
}