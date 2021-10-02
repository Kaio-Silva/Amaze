import { Pagina } from "./styled"
import MenuLateral from "../../components/commom/Menu";
import Usuario from "../../components/commom/usuario";
import { Pesquisa } from "../../components/styled/inputs.js";


export default function pagina() {
    return (
        <Pagina>
            <MenuLateral />
            <div className="direita">
                <Pesquisa className="Pesquisar" input="usar" tamanho="medio"/>
                <div className="baixo">
                   <Usuario />
                   <Usuario />
                   <Usuario />
                   <Usuario />
                   <Usuario />
                </div>
            </div>
        </Pagina>
    )
}

