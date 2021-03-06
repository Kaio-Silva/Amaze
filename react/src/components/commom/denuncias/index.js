import { Container } from './styled'
import { useState } from 'react';
import Pop from "../../../Popups/excluirDenuncia"
import Pedit from "../../../Popups/editarDenuncia"

export default function Compd(props){

    const [po,setPo] = useState(false)
    const [edit,setEdit] = useState(false)
    console.log(props.item)

    return(
      <Container>
            <div className="agrupar">
                <div className="descricao-conteudohdc1">{props.item.dt_denuncia}</div>
                <div className="barra-conteudohdc"></div>
                <div className="descricao-conteudohdcc">{props.item.ds_tipo_denuncia}</div>
                <div className="barra-conteudohdc"></div>
                <div className="descricao-conteudohdce">{props.item.ds_bairro}</div>
                <div className="barra-conteudohdc"></div>
                <div className="descricao-conteudohdc">{props.item.ds_rua}</div>
                <div className="alinhando-imagem">
                    <button onClick={ () => setEdit(true)} className="edit"> <img className="img1" src="/assets/Images/Group.svg" alt=""/></button>
                    <button onClick={ () => setPo(true)} className="del"> <img className="img" src="/assets/Images/Group (1).svg" alt=""/></button>
                </div>
            </div>
          
               <Pop trigger={po} id={props.item.id_denuncia} setTrigger={setPo} function={props.func}></Pop>
               <Pedit edit={edit} id={props.item.id_denuncia} rua={props.item.ds_rua} function={props.func} bairro={props.item.ds_bairro} ocorrencia={props.item.ds_ocorrencia} den={props.item} setEdit={setEdit}></Pedit>
            
        </Container>
    )
}