import { Container } from './styled'
import { useState } from 'react';
import Pop from "../../Popups/excluirDenuncia"
import Pedit from "../../Popups/editarDenuncia"

export default function Compd(){
    const [po,setPo] = useState(false)
    const [edit,SetEdit] = useState(false)
    return(
      <Container>
           <div className="descricao-conteudohdc1">07/10/2005</div>
           <div className="barra-conteudohdc"></div>
           <div className="descricao-conteudohdcc">Assalto</div>
           <div className="barra-conteudohdc"></div>
           <div className="descricao-conteudohdce">SP</div>
           <div className="barra-conteudohdc"></div>
           <div className="descricao-conteudohdc">Parque Alto do Rio Bonito</div>
           <div className="alinhando-imagem">
               <button onClick={ () => SetEdit(true)} className="edit"> <img className="img1" src="/assets/Images/Group.svg" alt=""/></button>
               <button onClick={ () => setPo(true)} className="del"> <img className="img" src="/assets/Images/Group (1).svg" alt=""/></button>
           </div>

           <Pop trigger={po} setTrigger={setPo}></Pop>
           <Pedit edit={edit} setEedit={SetEdit}></Pedit>
        </Container>
    )
}