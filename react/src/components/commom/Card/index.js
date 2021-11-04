import { Card } from './styled';
import Pop from "../../../Popups/popAdm"
import { useState } from 'react';
// import Api from '../../../services/api';
// const api = new Api()

export default function Denuncias(props) {
    const[trigger,SetTrigger] = useState(false)
    // //lembrar terminar o delete
    // async function cancelDenuc(id) {
    //     let f = await api.deleteDENU(id)
    //     alert('removeu');
    // }

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
                <Pop trigger={trigger} SetTrigger={SetTrigger} autor={props.autor} descricao={props.desc} ></Pop>
        </Card>
    )
}