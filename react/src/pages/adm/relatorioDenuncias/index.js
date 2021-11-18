import { Pesquisa } from '../../../components/styled/inputs.js';
import Card  from "../../../components/commom/Card";
import { Container } from './styled';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

import Api from "../../../services/api";
const api = new Api()


export default function Denuncias(props) {
    const [denuc, setDenuc] = useState([]);

    async function Listar(){
        let f = await api.ListarDENUTotal();
        console.log(f);
        setDenuc(f);
        toast.success("Denúncia excluída com sucesso");

    }
    useEffect(()=> {
        Listar();
    }, [])

    return (
            <Container>
                <ToastContainer/>
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo">
                    {denuc.map(item =>
                        <div className="alinhando">
                            <Card autor={item.id_usuario_infob_amz_tbusuario.nm_usuario} qtd={item.qtd_avaliacao} desc={item.ds_ocorrencia} id={item.id_denuncia} function={Listar}/>
                        </div>
                    )}
                </div>
        </Container>
    )
}