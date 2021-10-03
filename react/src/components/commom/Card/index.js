import { Card } from './styled';

export default function denuncias(props) {
    return (
        <Card>
                <div className="cont i"> <div className="b">Autor:</div> {props.autor} </div>
                <div className="cont i"> <div className="b">Qtd Reportes:</div> {props.qtd} </div>
                <div className="descriçao i"> <div className="b">Descrição:</div> {props.desc} </div>
                <div className="imagens">
                    <button className="botoes"> <img src="/assets/Images/CancelarDenuncia3.png" alt=""/> </button>
                    <button className="botoes"> <img src="/assets/Images/Aprovar3.png" alt=""/> </button>
                </div>
        </Card>
    )
}