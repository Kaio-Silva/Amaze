import Usuario from "../../../components/commom/usuario";
import { Pesquisa } from "../../../components/styled/inputs.js";
import { Container } from "./styled";
import { useEffect, useState } from 'react';
import Api from "../../../services/api";
const api = new Api()

export default function Pagina(props) {
    const [denuc, setDenuc] = useState([]);

    async function Listar(){
        let f = await api.USUtotal();
        console.log(f);
        setDenuc(f);
    }
    useEffect(()=> {
        Listar();
    }, [])


    return (
            <Container>
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                    <div className="baixo">
                        {denuc.map(item =>
                            <Usuario Nome={item.usuario} Data="" Telefone={item.telefone} Cadastro={item.arivo} Email={item.email} Report="8"/>
                        )}
                    </div>
            </Container>
    )
}

