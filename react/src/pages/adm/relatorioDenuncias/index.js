import { Pesquisa } from '../../../components/styled/inputs.js';
import Card  from "../../../components/commom/Card";
import { Container } from './styled';

import { useState, useEffect } from 'react';

import Api from "../../../services/api";
const api = new Api()


export default function Denuncias() {
    const [denuc, setDenuc] = useState([]);
    const [pesquisa, setPesquisa] = useState('')


    function search (event){
        if(event.key === 'Enter'){
            return pesquisa     
        }
    }


    async function Listar(){
        let f = await api.ListarDENUTotal(pesquisa);
        setDenuc(f);
        console.log(f)
    }

    useEffect(() => {
        Listar();
    }, [denuc])

    return (
            <Container>
                <Pesquisa onChange={ e => setPesquisa(e.target.value)} onKeyPress={search} className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo">
                    {denuc.map(item =>
                        <div className="alinhando">
                            <Card autor={item.id_usuario_infob_amz_tbusuario.nm_usuario} qtd={item.qtd_avaliacao} desc={item.ds_motivo_reporte} id={item.id_denuncia} function={Listar}/>
                        </div>
                    )}
                </div>
        </Container>
    )
}