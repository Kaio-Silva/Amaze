import { useState, useRef } from 'react';
import Api from '../../services/api';
import { Container } from './styled'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

const api = new Api();

export default function P2(props){

    const[desc, setDesc] = useState('')

    const loading = useRef(null);

    let idDenunc = props.id

    let idUsu = Cookies.get('Idusu')

    let d = new Date();
    
    const Data = d.toISOString()

     

    async function reporte(){
        loading.current.continuousStart();

        await api.CRIARreporte(idUsu, idDenunc, Data, desc);
        toast.success('Reporte criado com sucesso!') 

        loading.current.complete();  
        setTimeout(() => props.func(false), 2000);
    }

    return(props.bool) ?(
        <Container>
            <LoadingBar color='#f11946' ref={loading} />
            <ToastContainer/>
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