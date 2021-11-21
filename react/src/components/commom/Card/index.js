import { Card } from './styled';
import Pop from "../../../Popups/popAdm"
import { useState } from 'react';
import Api from '../../../services/api';
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const api = new Api()

export default function Denuncias(props) {
    const[trigger,SetTrigger] = useState(false)
    const loading = useRef(null);

    const confirmar = true;

     async function Delete() {
        loading.current.continuousStart();

         await api.deleteDENU(props.id)

        toast.success("Denúncia excluída com sucesso");
        loading.current.complete(); 
     }

     async function Aprovar() {
        loading.current.continuousStart();

         await api.ReporteFalse(props.id, confirmar)

        toast.success("Denúncia aprovada com sucesso");
        loading.current.complete(); 
     }

    return (
        <Card>
            <ToastContainer />
            <LoadingBar color='#f11946' ref={loading} />
            <div >
                <div className="cont i"> <div className="b">Autor:</div> {props.autor} </div>
                <div className="cont i"> <div className="b">Qtd Reportes:</div> {props.qtd} </div>
                <div className="descriçao i"> <div className="b">Descrição:</div> {props.desc} </div>
                <div className="imagens">
                    <button className="botoes" onClick={Delete}> <img src="/assets/Images/CancelarDenuncia3.png" alt=""/> </button>
                    <button className="botoes" onClick={Aprovar}> <img src="/assets/Images/Aprovar3.png" alt=""/> </button>
                </div>
             </div>
                <Pop trigger={trigger} SetTrigger={SetTrigger} autor={props.autor} descricao={props.desc} ></Pop>
        </Card>
    )
}