import { Card } from './styled';
import Pop from "../../../Popups/popAdm"
import { useState } from 'react';

export default function Denuncias(props) {
    const[trigger,SetTrigger] = useState(false)
    return (
        <Card>
            <div onClick={() => SetTrigger(true)}>
                <div className="cont i"> <div className="b">Autor:</div> {props.autor} </div>
                <div className="cont i"> <div className="b">Qtd Reportes:</div> {props.qtd} </div>
                <div className="descriçao i"> <div className="b">Descrição:</div> {props.desc} </div>
                <div className="imagens">
                    <button className="botoes"> <img src="/assets/Images/CancelarDenuncia3.png" alt=""/> </button>
                    <button className="botoes"> <img src="/assets/Images/Aprovar3.png" alt=""/> </button>
                </div>
             </div>
                <Pop trigger={trigger} SetTrigger={SetTrigger}></Pop>
        </Card>
    )
}