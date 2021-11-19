import { useState } from 'react';
import Api from '../../services/api';
import { Container } from './styled'
import Cookies from 'js-cookie'

const api = new Api();

export default function P2(props){

    const[desc, setDesc] = useState('')

    let idDenunc = props.id

    let idUsu = Cookies.get('Idusu')

    let d = new Date();
    
    const Data = d.toISOString()

     

    async function reporte(){
        await api.CRIARreporte(idUsu, idDenunc, Data, desc);
    }

    return(props.bool) ?(
        <Container>
        <div className="abox">
            <div className="cabecalho"><button onClick={() => props.func(false)}><img src="/assets/images/Fechar 5.png" alt=""/></button></div>
            <div className="img"><img src="/assets/images/risco.png" alt=""/></div>
            <div className="titulo"> Achou essa denuncia inválida? </div>
            <div className="textaa"><textarea onChange={ e => setDesc(e.target.value) } placeholder="Motivo do reporte"></textarea></div>
            <div className="botao"><button onClick={reporte}>Confirmar Reporte</button></div>
       </div>
       
       { props.children}
     </Container>
    ) : "";
}  