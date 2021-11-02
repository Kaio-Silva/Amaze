import { Pesquisa } from '../../../components/styled/inputs.js';
import Card  from "../../../components/commom/Card";
import { Container } from './styled';
import { useState, useEffect } from 'react';

import Api from "../../../services/api";
const api = new Api()


export default function Denuncias(props) {
    const [denuc, setDenuc] = useState([]);
    //lembrar de arrumar o usuario
    async function Funcao(){
        let f = await api.ListarDENUTotal();
        setDenuc(f);
        console.log('oi'+f)
    }

    useEffect(()=> {
        Funcao();
    }, [])

    return (
            <Container>
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo">
                    {denuc.map(item =>
                        <div className="alinhando">
                            <Card autor={item.id_usuario} qtd={item.qtd_avaliacao} desc={item.ds_ocorrencia}/>
                            <Card autor={item.id_denuncia} qtd={item.qtd_avaliacao} desc={item.ds_ocorrencia}/>
                        </div>
                    )}
                </div>
        </Container>
    )
}