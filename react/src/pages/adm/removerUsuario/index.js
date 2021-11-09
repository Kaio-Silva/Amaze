import Usuario from "../../../components/commom/usuario";
import { Pesquisa } from "../../../components/styled/inputs.js";
import { Container } from "./styled";
import { useEffect, useState } from "react";
import Api from "../../../services/api";

export default function Pagina(props) {
    const [usu, setUsu] = useState([]);

    async function ListarUsuario(){
        let f = await Api.USUtotal();

        setUsu(f);
    }

    useEffect(() => {
        ListarUsuario();
    }, [])


    return (
            <Container>
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                {usu.map(()=>
                    <div className="baixo">
                    <Usuario Nome="Thiago Viana" Data="10/03/2005" Telefone="4002 8922" Cadastro="09/11/2021" Email="asasasasa@gmail.com" Report="8"/>
                    <Usuario />
                    <Usuario />
                    <Usuario />
                    <Usuario />
                    </div>
                )}
            </Container>
    )
}

