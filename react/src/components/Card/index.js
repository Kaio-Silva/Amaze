import { Card } from './styled';

export default function denuncias() {
    return (
        <Card>
            <div className="info1">
                <div className="cont i"> <div className="b">Data:</div> 14/08/2021 </div>
                <div className="cont i"> <div className="b">Região:</div> Parque Alto do Rio Bonito </div>
                <div className="descriçao i"> <div className="b">Descrição:</div> Fui assaltado saindo de casa, tomem cuidado area esta bem perigosa </div>
                <div className="imagens">
                    <div className="imagem1"> <img src="/assets/Images/CancelarDenuncia3.png"/> </div>
                    <div className="imagem2"> <img src="/assets/Images/Aprovar3.png"/> </div>
                </div>
            </div>
        </Card>
    )
}