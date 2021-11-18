import Usuario from "../../../components/commom/usuario";
import { Pesquisa } from "../../../components/styled/inputs.js";
import { Container } from "./styled";
import { useEffect, useState } from 'react';
import Api from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new Api()

export default function Pagina(props) {
    const [denuc, setDenuc] = useState([]);

    async function Listar(){
        let f = await api.USUtotal();
        setDenuc(f);
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
                            <Usuario Nome={item.usuario} Telefone={item.telefone} Cadastro={item.arivo} Email={item.email} Report="8" id={item.id} func={Listar}/>
                        )}
                    </div>
            </Container>
    )
}

