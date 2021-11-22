import Usuario from "../../../components/commom/usuario";
import { Pesquisa } from "../../../components/styled/inputs.js";
import { Container } from "./styled";
import { useEffect, useState } from 'react';
import Api from "../../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new Api()

export default function Pagina() {
    const [denuc, setDenuc] = useState([]);
    const [pesquisa, setPesquisa] = useState('')
    const [report, setReport] = useState(0)

    function search (event){
        if(event.key === 'Enter'){
            return pesquisa     
        }
    }

    async function Listar(){
        let f = await api.USUtotal();
        setDenuc(f.final);
    }


    useEffect(()=> {
        Listar();
    }, [denuc])

    console.log(denuc)

    return (
            <Container>
                <ToastContainer/>
                <Pesquisa className="Pesquisar" onChange={ e => setPesquisa(e.target.value)} onKeyPress={search}  input="usar" tamanho="medio"/>
                    <div className="baixo">
                        {denuc.map(item =>
                            <Usuario Nome={item.usuario} Telefone={item.telefone} Cadastro={item.arivo} Email={item.email}  id={item.id} func={Listar}/>
                        )}
                    </div>
            </Container>
    )
}

